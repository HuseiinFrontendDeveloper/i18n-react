import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trassENG from './component/en.json';
import trasUZ from './component/uz.json'

const resources = {
 en:{
  translation: trassENG
 },
 uz:{
  translation:trasUZ
 }
}

i18n 
 .use(initReactI18next)
 .init({
  resources,
    lng: "en",
    fallbackLng: "en",

   interpolation:{
    escapeValue: false
  }
 });

 export default i18n;