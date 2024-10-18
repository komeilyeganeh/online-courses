import i18n from "../locales/i18n";
import IranFlag from "@images/flags/iran.png";
import UnitedKingdomFlag from "@images/flags/united-kingdom.png";
import TurkeyFlag from "@images/flags/turkey.png";
import { LanguageType } from "types/language.type";

export const Languages: LanguageType[] = [
  {
    title: i18n.t("language.en"),
    flag: UnitedKingdomFlag,
  },
  {
    title: i18n.t("language.fa"),
    flag: IranFlag,
  },
  {
    title: i18n.t("language.tr"),
    flag: TurkeyFlag,
  },
];
