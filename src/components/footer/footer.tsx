import { Button, Input, Logo, Text } from "@components";
import { t } from "i18next";

export const Footer: React.FC = () => {
  // ---- jsx return ----
  return (
    <footer className="mt-20 bg-slate-900">
      <div className="container p-10">
        <div className="flex items-center justify-between pb-4 border-b border-b-gray-800">
          <div className="flex flex-col gap-y-3">
            <Text as="h3" className="text-4xl text-white font-bold">
              {t("footer.title")}
            </Text>
            <Text className="text-gray-500">{t("footer.sub_title")}</Text>
          </div>
          <div className="flex items-center">
            <Input type="text" placeholder={t("input.email")} name="email" className="rounded-r-none"/>
            <Button as="button" className="bg-purple-700 text-white px-10 rounded-r-lg">{t("button.subscribe")}</Button>
          </div>
        </div>
        <div className="pt-6 flex items-center justify-between">
            <Logo />
            <Text className="text-white font-bold text-sm">Copyright © 2024 by edurock. All Rights Reserved.</Text>
        </div>
      </div>
    </footer>
  );
};
