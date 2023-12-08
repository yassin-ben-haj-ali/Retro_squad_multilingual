import i18n from "i18next";
import { initReactI18next } from 'react-i18next';



const resources = {
    en: require('./translation/en.json'),
    fr: require('./translation/fr.json'),
    es: require('./translation/es.json'),
    de: require('./translation/de.json'),
    it: require('./translation/it.json'),
    ar: require('./translation/ar.json'),
    hi: require('./translation/hi.json'),
    tr: require('./translation/tr.json'),
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: `${navigator.language.split('-')[0] || navigator.userLanguage('-')[0]}`,
        fallbackLng: `${navigator.language || navigator.userLanguage}`,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;