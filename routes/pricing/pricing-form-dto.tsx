import { phoneNumberValidator } from '@open-fi/common';
import { z } from 'zod';

export const pricingFormSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First Name is required' }),
  lastName: z.string().trim().min(1, { message: 'Last Name is required' }),
  company: z.string().trim().min(1, { message: 'Company is required' }),
  email: z.string().email('Invalid email address'),
  phone: phoneNumberValidator(),
  companySize: z.string().optional(),
  question: z.string().min(1, 'Question is required'),
});

export type PricingFormDto = z.infer<typeof pricingFormSchema>;
