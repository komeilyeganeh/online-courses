import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import ENTranslation from "./en/en.json"
import FATranslation from "./fa/fa.json"

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: ENTranslation
        },
         fa: {
            translation: FATranslation
         }
    },
    lng: "en"
})