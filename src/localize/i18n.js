import i18n from "i18next";
 import Backend from "i18next-http-backend";
 import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
 import translationEN from "../local/translationEN.json"
 import translationAR from "../local/translationAR.json";
import { useEffect } from "react";
import cookie from "js-cookie";
import HttpApi from 'i18next-http-backend'
// const currentResourceCode = cookie.get ("i18next") ||"en"
// const currentResource = resources.find(l => l.code === currentResourceCode) 



i18n
//  .use(Backend)   
.use(HttpApi) 
 .use(LanguageDetector)    
 .use(initReactI18next)    
 .init({
  resources : {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR,
    dir:"rtl"
  }
},
  // resources,
  // lng: document.querySelector("html").lang,
supportedLngs: ['en' , 'ar'],
    fallbackLng: "en",
    // debug: true,
detection:{
  order: [ 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
caches:['cookie'],
},
// backend:{
//   loadPath: '/assets/locales/{{lng}}/translation.json',

// },

    // interpolation: {
    //   escapeValue: false // not needed for react as it escapes by default
    // }
  });


export default i18n;


