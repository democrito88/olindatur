import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt-BR.json';
import cn from './locales/cn.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        pt: { translation: pt },
        en: { translation: en },
        es: { translation: es },
        cn: { translation: cn },
    },
    lng: 'pt', // Default language
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;