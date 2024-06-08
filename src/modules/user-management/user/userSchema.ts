import { z } from 'zod';

export const createUserValidationSchema = z
  .object({
    lastNameKh: z.string().max(50).optional().or(z.literal('')),
    firstNameKh: z.string().max(50).optional().or(z.literal('')),
    lastName: z.
      string({ message: 'Last name is required.' })
      .max(35, { message: 'Last name must be no more than 35 characters long.' }),
    firstName: z.
      string({ message: 'First name is required.' })
      .max(35, { message: 'First name must be no more than 35 characters long.' }),
    phoneNumber: z.string().min(9).max(15).optional().or(z.literal('')),
    email: z.string().email().max(50).optional().or(z.literal('')),
    username: z
      .string({ message: 'Username is required.' })
      .min(4, { message: 'Username must be at least 4 characters long.' })
      .max(35, { message: 'Username must be no more than 35 characters long.' })
      .refine((value) => !value.includes(' '), { message: 'Username cannot contain spaces.' })
      .refine((value) => /^[a-zA-Z0-9.]+$/.test(value), { message: 'Username can only contain letters, numbers, and dots.' }),
    password: z
      .string({ message: 'Password is required.' })
      .min(8, 'Password must be at least 8 characters long.')
      .max(50, 'Password must be no more than 50 characters long.')
      .regex(/[a-zA-Z]/, 'Password must contain at least one letter.')
      .regex(/\d/, 'Password must contain at least one number.')
      .trim(),
    confirmPassword: z
      .string({ message: 'Confirm password is required.' })
      .min(8, 'Confirm password must be at least 8 characters long.')
      .max(50, 'Confirm password must be no more than 50 characters long.')
      .regex(/[a-zA-Z]/, 'Confirm password must contain at least one letter.')
      .regex(/\d/, 'Confirm password must contain at least one number.')
      .trim()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword']
  });
