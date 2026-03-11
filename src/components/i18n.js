import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importe seus arquivos de tradução
import pt from './i18n/pt/global.json';
import en from './i18n/en/global.json';
import es from './i18n/es/global.json';
import fr from './i18n/fr/global.json';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador
  .use(initReactI18next) // Passa o i18n para o react-i18next
  .init({
    resources: {
      pt: {
        translation: pt,
      },
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      fr: {
        translation: fr,
      },
    },
    fallbackLng: 'pt', // Idioma de fallback (base)
    supportedLngs: ['pt', 'en', 'es', 'fr'], // Lista explícita
    nonExplicitSupportedLngs: true, 
    debug: true, 

    interpolation: {
      escapeValue: false,
    },
    // Opções para a detecção de idioma
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
