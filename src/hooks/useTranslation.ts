import { useI18n } from "vue-i18n";
import type { MessageSchema } from "@/locales";

export const useTranslation = () => {
  const { t } = useI18n<{ message: MessageSchema }, string>();
  return { t };
}; 