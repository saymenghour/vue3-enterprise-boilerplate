import { i18n } from '@/locales';
import type { VueI18nTranslation } from 'vue-i18n';
import en from "@/locales/en";

export function useI18n(): { t: VueI18nTranslation<{ local: typeof en }> } {
  const { t } = i18n.global;
  return { t };
};
