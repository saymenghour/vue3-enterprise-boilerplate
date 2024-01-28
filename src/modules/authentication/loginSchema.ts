import { z } from 'zod';

import { i18n } from '@/locales';

export const loginSchema = z.object({
  username: z
    .string({
      required_error: i18n.global.t('placeholder.login.username')
    })
    .min(4)
    .trim(),
  password: z
    .string({
      required_error: i18n.global.t('placeholder.login.password', { passwordLength: 4 })
    })
    .min(4)
    .trim()
});
