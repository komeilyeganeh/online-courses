import { Logo, Navbar, Button, Language } from "@components";
import { t } from "i18next";
import { CgShoppingCart } from "react-icons/cg";

export const Header: React.FC = () => {
  // ---- jsx return ----
  return (
    <header className="py-5 border-b-2 border-gray-200">
      <div className="container flex items-center justify-between">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-x-4">
          <div className="relative cursor-pointer"><CgShoppingCart size={25}/> <span className="absolute -top-3 right-0 text-xs rounded-full w-4 h-4 bg-purple-600 text-white flex place-content-center">6</span></div>
          <Button as="link" href="/login" className="text-sm bg-purple-500 rounded-3xl text-white">{t("login_signup")}</Button>
        <Language />
        </div>
      </div>
    </header>
  );
};
