"use server";

import { Resend } from "resend";
import { z } from "zod";
import {
  contactSchema,
  type ContactActionState,
} from "@/lib/contact-schema";

export async function sendContactMessage(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;
  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Contact email environment is incomplete.");
    return {
      status: "error",
      message: "Messages are temporarily unavailable. Please email directly.",
    };
  }

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: parsed.data.email,
      subject: `Portfolio enquiry from ${parsed.data.name}`,
      text: parsed.data.message,
    });
    if (error) throw error;
    return { status: "success", message: "Thanks—your message has been sent." };
  } catch (error) {
    console.error("Contact email delivery failed.", error);
    return {
      status: "error",
      message: "Message delivery failed. Please try again or email directly.",
    };
  }
}
