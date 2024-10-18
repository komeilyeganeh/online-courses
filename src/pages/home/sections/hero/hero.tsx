import { Button, Text } from "@components";
import { t } from "i18next";
import HeroPng from "@images/hero-image.png";
import HeroBgPng from "@images/hero-image-bg.png";

export const HeroSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-10">
      <div className="container">
        <div className="w-full bg-purple-gradient rounded-3xl px-12 py-20 flex justify-between items-center">
          <div className="flex flex-col gap-y-24 w-1/2">
            <div className="flex flex-col gap-y-10 text-white">
              <Text
                as="h3"
                className="text-red-600 text-lg uppercase tracking-[6px]"
              >
                {t("hero_section.education_solution")}
              </Text>
              <Text className="text-5xl font-bold">
                {t("hero_section.description")}
              </Text>
              <Text>{t("hero_section.sub_description")}</Text>
            </div>
            <div>
              <Button
                as="link"
                href="/courses"
                className="bg-white py-3 px-6 rounded-md"
              >
                {t("button.view_courses")}
              </Button>
            </div>
          </div>
          <div className="w-1/2 h-full relative">
            <img
              src={HeroBgPng}
              alt="hero bg image"
              className="absolute top-1/2 left-40 -translate-y-1/2"
            />
            <img
              src={HeroPng}
              alt="hero image"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
