import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import fr from './locales/fr';
import yo from './locales/yo';
import type { SupportedLocale } from '../data/types';

export const SUPPORTED_LOCALES: { code: SupportedLocale; label: string; nativeLabel: string }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'fr', label: 'French', nativeLabel: 'Français' },
  { code: 'yo', label: 'Yoruba', nativeLabel: 'Yorùbá' },
];

export const DEFAULT_LOCALE: SupportedLocale = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      yo: { translation: yo },
    },
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: SUPPORTED_LOCALES.map((l) => l.code),
    interpolation: {
      // React already escapes values
      escapeValue: false,
    },
    detection: {
      // Prefer localStorage, then browser language
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'eriife-locale',
      caches: ['localStorage'],
    },
  });

export default i18n;
