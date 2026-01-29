import { z } from "zod"
 
export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy.",
  }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
