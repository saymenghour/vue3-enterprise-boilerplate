import { createI18n } from "vue-i18n";
import { LANGUAGE_DATA_SOURCE, LANGUAGE_EN } from "@/constants";
import messages from "./messages";

export const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API. see more https://vue-i18n.intlify.dev/guide/advanced/composition.html
  locale: LANGUAGE_EN.key,
  messages,

  availableLocales: LANGUAGE_DATA_SOURCE,
  fallbackLocale: LANGUAGE_EN.key,
});