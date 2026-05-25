import { translations, type Locale } from './site';

export function t(locale: Locale) {
  return translations[locale];
}

export const defaultLocale: Locale = 'en';
