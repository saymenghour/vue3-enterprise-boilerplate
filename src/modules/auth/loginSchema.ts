import { i18n } from '@/locales';
import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string({ required_error: i18n.global.t('login.validation.username') })
    .min(1, { message: i18n.global.t('login.validation.username') })
    .trim(),
  password: z
    .string({ required_error: i18n.global.t('login.validation.password') })
    .min(1, { message: i18n.global.t('login.validation.password') })
    .trim()
});
