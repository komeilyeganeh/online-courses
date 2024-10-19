import { Badge, Button, Card, Text } from "@components";
import { CourseList } from "@data/course-list.ts"
import { t } from "i18next";
import { CourseType } from "types/course.type";

export const CourseListSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section>
      <div className="container flex flex-col items-start px-10 py-32 gap-y-7">
        <Badge>{t("course_list.title")}</Badge>
        <div className="w-full flex items-center justify-between">
          <Text as="h2" className="text-4xl font-bold">{t("course_list.desc")}</Text>
          {/* <div className="flex items-center gap-x-10">
            <Button as="button">{t("tabs.see_all")}</Button>
            <Button as="button">{t("tabs.data_science")}</Button>
            <Button as="button">{t("tabs.engineering")}</Button>
            <Button as="button">{t("tabs.featured")}</Button>
            <Button as="button">{t("tabs.architecture")}</Button>
          </div> */}
        </div>
        <div className="w-full flex flex-wrap gap-6">
          {
            CourseList.map((course: CourseType) => (<Card {...course}/>))
          }
        </div>
      </div>
    </section>
  );
};
