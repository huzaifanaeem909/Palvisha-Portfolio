// src/lib/contact-schema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email: z.string().trim().pipe(
    z.email("Enter a valid email.").max(
      254,
      "Too big: expected string to have <=254 characters",
    ),
  ),
  message: z
    .string()
    .trim()
    .min(20, "Use at least 20 characters.")
    .max(5_000),
  company: z.string().max(0, "Submission rejected."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof ContactInput, string[]>>;
};
