import { Badge, Button, Input, Text } from "@components";
import { t } from "i18next";

export const RegistrationSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="bg-blue-800">
      <div className="container p-10 flex items-start justify-between">
        <div className="flex flex-col items-start gap-y-10">
          <Badge>{t("registration_section.title")}</Badge>
          <Text className="text-3xl font-bold text-white w-1/2">
            {t("registration_section.sub_title")}
          </Text>
        </div>
        <div className="w-1/3 relative">
          <form className="w-full p-5 bg-white rounded-lg flex flex-col gap-y-4 items-start absolute left-0 shadow-xl">
            <Text className="text-xl font-bold">{t("registration_section.form.title")}</Text>
            <Input type="text" placeholder={t("input.your_name")} name="name" className="w-full"/>
            <Input type="email" placeholder={t("input.email")} name="email" className="w-full"/>
            <Input type="text" placeholder={t("input.phone")} name="phone" className="w-full"/>
            <Input
              type="text"
              placeholder={t("input.address")}
              name="address"
              className="w-full"
            />
            <Button as="submit" className="bg-purple-600 rounded-md text-white text-sm px-10">{t("button.sign_up")}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
