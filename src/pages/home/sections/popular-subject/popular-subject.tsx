import { Badge, Button, Text } from "@components";
import { t } from "i18next";
import LinesEllipsis from "react-lines-ellipsis";

export const PopularSubjectSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-4">
      <div className="container px-10 py-32 grid grid-cols-2 gap-6 bg-purple-50 rounded-xl">
        <div className="flex flex-col items-start gap-y-4">
          <Badge>{t("popular_subject.title")}</Badge>
          <Text as="h3" className="text-4xl font-bold">
            {t("popular_subject.sub_title")}
          </Text>
          <Text className="text-gray-600">
            {t("popular_subject.description")}
          </Text>
          <Text className="pl-3 border-l-2 border-l-red-400 text-gray-500 text-sm">
            {t("popular_subject.sub_desc")}
          </Text>
          <Button as="button" className="bg-red-500 text-white rounded-md self-baseline mt-20">{t("button.explore_more")}</Button>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg flex flex-col gap-y-6 justify-between items-start shadow-xl">
            <div className="flex flex-col gap-y-3">
              <Text className="text-xl font-bold">
                {t("popular_subject.business_studies")}
              </Text>
              <Text className="text-sm text-gray-600">
                <LinesEllipsis
                  text={t("popular_subject.card_desc")}
                  maxLine={2}
                  ellipsis="..."
                />
              </Text>
            </div>
            <Button
              as="link"
              href="/"
              className="text-sm bg-purple-400 rounded-lg text-white"
            >
              {t("popular_subject.view_subject")}
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col gap-y-6 justify-between items-start shadow-xl">
            <div className="flex flex-col gap-y-3">
              <Text className="text-xl font-bold">
                {t("popular_subject.artist_design")}
              </Text>
              <Text className="text-sm text-gray-600">
                <LinesEllipsis
                 text={t("popular_subject.card_desc")}
                 maxLine={2}
                 ellipsis="..."
                />
              </Text>
            </div>
            <Button
              as="link"
              href="/"
              className="text-sm bg-purple-400 rounded-lg text-white"
            >
              {t("popular_subject.view_subject")}
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col gap-y-6 justify-between items-start shadow-xl">
            <div className="flex flex-col gap-y-3">
              <Text className="text-xl font-bold">
                {t("popular_subject.machine_learning")}
              </Text>
              <Text className="text-sm text-gray-600">
                <LinesEllipsis
                  text={t("popular_subject.card_desc")}
                  maxLine={2}
                  ellipsis="..."
                />
              </Text>
            </div>
            <Button
              as="link"
              href="/"
              className="text-sm bg-purple-400 rounded-lg text-white"
            >
              {t("popular_subject.view_subject")}
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg flex flex-col gap-y-6 justify-between items-start shadow-xl">
            <div className="flex flex-col gap-y-3">
              <Text className="text-xl font-bold">{t("popular_subject.artist_design")}</Text>
              <Text className="text-sm text-gray-600">
                <LinesEllipsis
                  text={t("popular_subject.card_desc")}
                  maxLine={2}
                  ellipsis="..."
                />
              </Text>
            </div>
            <Button
              as="link"
              href="/"
              className="text-sm bg-purple-400 rounded-lg text-white"
            >
              {t("popular_subject.view_subject")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
