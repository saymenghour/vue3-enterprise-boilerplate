import type { VueI18nTranslation } from 'vue-i18n';

import { i18n } from '@/locales';
import en from '@/locales/en';

export function useTranslation(): { t: VueI18nTranslation<{ local: typeof en }> } {
  const { t } = i18n.global;
  return { t };
}
