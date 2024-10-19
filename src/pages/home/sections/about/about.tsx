import { Badge, Text } from "@components";
import AboutOnePng from "@images/about/about_1.webp";
import AboutTwoPng from "@images/about/about_2.webp";
import AboutThreePng from "@images/about/about_3.webp";
import { t } from "i18next";

export const AboutSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-8">
      <div className="container flex justify-between py-12">
        <div className="w-1/2 relative flex items-center justify-center">
          <img
            src={AboutThreePng}
            alt="about image"
            className="absolute -top-8 left-32 animate-about-pattern -z-10"
          />
          <img src={AboutOnePng} alt="about image" />
          <img
            src={AboutTwoPng}
            alt="about image"
            className="absolute bottom-0 left-2/4 z-20"
          />
        </div>
        <div className="w-1/2 p-5 flex flex-col justify-between">
          <div className="flex flex-col items-start gap-y-8">
            <Badge className="bg-red-100 text-red-600">
              {t("about.title")}
            </Badge>
            <Text as="h3" className="text-4xl font-bold">
              {t("about.sub_title")}
            </Text>
            <Text className="italic text-gray-400">
              {t("about.description")}
            </Text>
          </div>
          <div className="flex flex-col gap-y-6">
            <Text className="pl-3 border-l-4 border-l-red-400">
              {t("about.desc_one")}
            </Text>
            <Text className="pl-3 border-l-4 border-l-red-400">
              {t("about.desc_two")}
            </Text>
            <Text className="pl-3 border-l-4 border-l-red-400">
              {t("about.desc_three")}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};
