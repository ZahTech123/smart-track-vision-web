
import { z } from 'zod';

export const quoteFormSchema = z.object({
  selectedPlan: z.string().min(1, "Please select a plan"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .refine((email) => {
      // Additional validation for email format
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegex.test(email);
    }, "Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  numVehicles: z.number().min(1, "Number of vehicles must be at least 1"),
  message: z.string().optional(),
});

export type QuoteFormSchema = z.infer<typeof quoteFormSchema>;
