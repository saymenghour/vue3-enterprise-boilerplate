export enum Locales {
  EN = 'en',
  KM = 'km'
}

export type LanguageType = {
  value: string
  label: string
  icon?: string
}

export const LANGUAGES: LanguageType[] = [
  {
    value: Locales.EN,
    label: 'English'
  },
  {
    value: Locales.KM,
    label: 'ភាសាខ្មែរ'
  }
];

export const LOCALE_KEYS: string[] = [Locales.EN, Locales.KM];
