import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import { sendContactMessage } from "./contact";

const idle = { status: "idle", message: "" } as const;

function form(fields: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
}

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  message: "I would like to discuss a writing project.",
  company: "",
};

const envNames = ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "CONTACT_TO_EMAIL"] as const;

function setEnv(t: TestContext, values: Partial<Record<(typeof envNames)[number], string>>) {
  const saved = envNames.map((name) => [name, process.env[name]] as const);
  t.after(() => {
    for (const [name, value] of saved) {
      if (value === undefined) delete process.env[name];
      else process.env[name] = value;
    }
  });
  for (const name of envNames) {
    const value = values[name];
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

const fullEnv = {
  RESEND_API_KEY: "re_test_key",
  RESEND_FROM_EMAIL: "Portfolio <noreply@example.com>",
  CONTACT_TO_EMAIL: "owner@example.com",
};

function mockFetch(t: TestContext, response: () => Response) {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const original = globalThis.fetch;
  globalThis.fetch = async (input, init) => {
    calls.push({ url: String(input), init: init ?? {} });
    return response();
  };
  t.after(() => {
    globalThis.fetch = original;
  });
  return calls;
}

test("returns field errors for invalid input", async () => {
  const state = await sendContactMessage(
    idle,
    form({ name: "", email: "nope", message: "short", company: "" }),
  );
  assert.equal(state.status, "error");
  assert.equal(state.message, "Check the highlighted fields.");
  assert.ok(state.errors?.name);
  assert.ok(state.errors?.email);
  assert.ok(state.errors?.message);
  assert.equal(state.errors?.company, undefined);
});

test("returns the unavailable message when email env is incomplete", async (t) => {
  t.mock.method(console, "error", () => {});
  setEnv(t, { ...fullEnv, RESEND_API_KEY: undefined });
  const calls = mockFetch(t, () => Response.json({ id: "unused" }));

  const state = await sendContactMessage(idle, form(valid));
  assert.deepEqual(state, {
    status: "error",
    message: "Messages are temporarily unavailable. Please email directly.",
  });
  assert.equal(calls.length, 0);
});

test("sends the validated message through Resend", async (t) => {
  setEnv(t, fullEnv);
  const calls = mockFetch(t, () => Response.json({ id: "email_123" }));

  const state = await sendContactMessage(idle, form(valid));
  assert.deepEqual(state, {
    status: "success",
    message: "Thanks—your message has been sent.",
  });

  assert.equal(calls.length, 1);
  const [{ url, init }] = calls;
  assert.match(url, /\/emails$/);
  assert.equal(init.method, "POST");
  assert.equal(new Headers(init.headers).get("Authorization"), "Bearer re_test_key");
  const body = JSON.parse(String(init.body));
  assert.equal(body.from, fullEnv.RESEND_FROM_EMAIL);
  assert.equal(body.to, fullEnv.CONTACT_TO_EMAIL);
  assert.equal(body.reply_to, valid.email);
  assert.equal(body.subject, `Portfolio enquiry from ${valid.name}`);
  assert.equal(body.text, valid.message);
});

test("returns the controlled failure state when Resend rejects", async (t) => {
  const consoleError = t.mock.method(console, "error", () => {});
  setEnv(t, fullEnv);
  const calls = mockFetch(t, () =>
    Response.json(
      { name: "validation_error", message: "Invalid `from` field.", statusCode: 422 },
      { status: 422 },
    ),
  );

  const state = await sendContactMessage(idle, form(valid));
  assert.deepEqual(state, {
    status: "error",
    message: "Message delivery failed. Please try again or email directly.",
  });
  assert.equal(calls.length, 1);
  assert.ok(
    consoleError.mock.calls.some((call) => call.arguments[0] === "Contact email delivery failed."),
  );
});
