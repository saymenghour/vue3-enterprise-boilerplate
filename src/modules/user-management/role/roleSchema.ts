import { z } from 'zod';

export const roleValidationSchema = z.object({
  nameEn: z.string().min(3).max(100),
  nameKh: z.string().min(3).max(100),
  type: z.string().max(100),
  description: z.string().max(255).optional().or(z.literal('')).nullable(),
  permission: z.record(z.string(), z.union([z.array(z.string()), z.undefined()])).optional().nullable()
});
