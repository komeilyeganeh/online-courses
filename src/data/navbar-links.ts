import i18n from "../locales/i18n";
import { NavbarLinksType } from "types/navbar-links.type";

export const NavbarLinks: NavbarLinksType[] = [
  {
    title: i18n.t("navbar.home"),
    href: "/",
  },
  {
    title: i18n.t("navbar.courses"),
    href: "/courses",
  },
  {
    title: i18n.t("navbar.blog"),
    href: "/blog",
  },
  {
    title: i18n.t("navbar.about"),
    href: "/about",
  },
];
