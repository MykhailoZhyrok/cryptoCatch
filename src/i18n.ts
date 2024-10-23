import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationUk from './locales/uk/translation.json';
import translationRu from './locales/ru/translation.json';
// Add more languages as needed

i18n
  .use(LanguageDetector)
  .use(initReactI18next)  
  .init({
    resources: {
      uk: {
        translation: translationUk,
      },
      ru: {
        translation: translationRu,
      },
    },
    fallbackLng: 'uk', 
    debug: true,
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
