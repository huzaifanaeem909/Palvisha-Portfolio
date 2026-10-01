// src/lib/contact-schema.test.ts
import assert from "node:assert/strict";
import test from "node:test";
import { z } from "zod";
import { contactSchema } from "./contact-schema";

test("accepts a valid contact message", () => {
  const result = contactSchema.safeParse({
    name: "Ada Lovelace",
    email: "ada@example.com",
    message: "I would like to discuss a writing project.",
    company: "",
  });
  assert.equal(result.success, true);
});

test("reports email format and max length for long malformed email", () => {
  const result = contactSchema.safeParse({
    name: "Ada Lovelace",
    email: "x".repeat(255),
    message: "I would like to discuss a writing project.",
    company: "",
  });
  assert.equal(result.success, false);
  if (!result.success) {
    const messages = z.flattenError(result.error).fieldErrors.email ?? [];
    assert.ok(messages.includes("Enter a valid email."));
    assert.ok(
      messages.includes("Too big: expected string to have <=254 characters"),
    );
  }
});

test("rejects invalid fields and a filled honeypot", () => {
  const result = contactSchema.safeParse({
    name: "",
    email: "not-an-email",
    message: "short",
    company: "spam.example",
  });
  assert.equal(result.success, false);
  if (!result.success) {
    const fields = z.flattenError(result.error).fieldErrors;
    assert.ok(fields.name);
    assert.ok(fields.email);
    assert.ok(fields.message);
    assert.ok(fields.company);
  }
});
