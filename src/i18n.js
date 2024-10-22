import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ruTranslation from "./locales/ru/translation.json";
import uzTranslation from "./locales/uz/translation.json";

// Tarjima resurslari
const resources = {
  ru: {
    translation: ruTranslation
  },
  uz: {
    translation: uzTranslation
  }
};

i18n
  .use(initReactI18next) // react-i18next ni sozlash
  .init({
    resources,
    lng: "uz", // Default til
    fallbackLng: "uz", // Tillar mavjud bo'lmaganda foydalaniladigan til
    interpolation: {
      escapeValue: false // React bu xususiyatni avtomatik ravishda qo'llaydi
    }
  });

export default i18n;
