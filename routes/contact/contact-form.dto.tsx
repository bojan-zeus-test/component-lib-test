import { z } from 'zod';
import { phoneNumberValidator } from '@open-fi/common';

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  email: z.string().email('Invalid email address'),
  phone: phoneNumberValidator(),
  reason: z.enum([
    'sign-up',
    'support-request',
    'technical-request',
    'partnership-proposal',
    'general-enquiry',
  ]),
  message: z.string().min(1, 'Message is required'),
});

export type ContactFormDto = z.infer<typeof contactFormSchema>;
