import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from '../public/locales/en/common.json';
import ar from '../public/locales/ar/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'ar',
    fallbackLng: 'ar',
    supportedLngs: ['en', 'ar'],
    ns: ['common'],
    defaultNS: 'common',
    resources: {
      en: { common: en },
      ar: { common: ar },
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(lng);
  document.documentElement.lang = lng;
});

export default i18n;
