import { z } from 'zod';

export const createAndUpdateRoleValidationSchema = z.object({
  nameEn: z.string().min(3).max(100),
  nameKh: z.string().min(3).max(100),
  type: z.string().max(100),
  description: z.string().max(255).optional().or(z.literal('')).nullable(),
  // permissions: z.array(z.number()).optional().or(z.literal('')).nullable(),
});