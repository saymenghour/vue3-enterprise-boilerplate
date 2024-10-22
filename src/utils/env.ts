import { z } from 'zod';

const envSchema = z.object({
  APP_BASE_PATH: z.string(),
});

export const env = envSchema.parse(process.env);