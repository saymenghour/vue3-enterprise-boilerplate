import { i18n } from '@/locales';

export const useI18n = () => {
  const { t } = i18n.global;
  return { t };
};
