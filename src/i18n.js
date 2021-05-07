import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: ['sl', 'en'],

        interpolation: {
            escapeValue: false, // react already safes from xss
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
