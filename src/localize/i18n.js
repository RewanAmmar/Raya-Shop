import i18n from "i18next";
 import Backend from "i18next-http-backend";
 import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
 import translationEN from "../local/translationEN.json"
 import translationAR from "../local/translationAR.json";
import { useEffect } from "react";
import cookie from "js-cookie";

// const currentResourceCode = cookie.get ("i18next") ||"en"
// const currentResource = resources.find(l => l.code === currentResourceCode) 

export const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR,
    dir:"rtl"
  }
};

i18n
 .use(Backend)    
 .use(LanguageDetector)    
 .use(initReactI18next)    
 .init({
  resources,
  lng: "en",

    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });


export default i18n;


