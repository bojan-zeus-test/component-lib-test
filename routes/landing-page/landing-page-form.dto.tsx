import { z } from 'zod';
import { phoneNumberValidator } from '@open-fi/common';

export const landingPageFormSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First Name is required' }),
  lastName: z.string().trim().min(1, { message: 'Last Name is required' }),
  phone: phoneNumberValidator(),
});

export type landingPageFormDto = z.infer<typeof landingPageFormSchema>;
