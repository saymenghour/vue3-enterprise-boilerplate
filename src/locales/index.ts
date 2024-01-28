import { createI18n } from 'vue-i18n';

import en from './en';
import km from './km';

import { Locales, LOCALE_KEYS } from '@/constants';
import { getLocale } from '@/services/LocalStorage';

// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], string>({
  // you must set `false`, to use Composition API. see more https://vue-i18n.intlify.dev/guide/advanced/composition.html
  legacy: false,

  // Refer a global scope Composer instance of i18n
  globalInjection: true,

  locale: getLocale() ?? Locales.EN,
  fallbackLocale: Locales.EN,
  availableLocales: LOCALE_KEYS,

  messages: {
    [Locales.EN]: en,
    [Locales.KM]: km
  }
});
