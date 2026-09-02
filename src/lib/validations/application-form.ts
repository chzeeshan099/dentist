import { z } from "zod";

export const applicationFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name is too long."),

  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),

  whatsappNumber: z
    .string()
    .min(7, "Please enter a valid WhatsApp number.")
    .max(20, "WhatsApp number is too long.")
    .regex(
      /^\d+$/,
      "WhatsApp number can contain numbers only."
    ),

  currentEducation: z
    .string()
    .min(2, "Current education is required.")
    .max(100, "Current education is too long."),

 currentGPA: z
  .number({
    message: "Current GPA is required.",
  })
  .min(0, "GPA cannot be less than 0.")
  .max(4, "GPA cannot be greater than 4."),

  preferredDegree: z
    .string()
    .min(1, "Please select your preferred degree."),

  additionalNotes: z
    .string()
    .max(1000, "Additional notes are too long.")
    .optional(),
});

export type ApplicationFormValues = z.infer<
  typeof applicationFormSchema
>;