import { AboutSection } from "./sections/about/about";
import { BrandSection } from "./sections/brand/brand";
import { CommentSection } from "./sections/comment/comment";
import { CourseListSection } from "./sections/course-list/course-list";
import { HeroSection } from "./sections/hero/hero";
import { PopularSubjectSection } from "./sections/popular-subject/popular-subject";
import { RegistrationSection } from "./sections/registration/registration";
import { StatisticsSection } from "./sections/statistics/statistics";

export const Home: React.FC = () => {
  // ---- jsx return ----
  return (
    <>
      <HeroSection />
      <BrandSection />
      <AboutSection />
      <StatisticsSection />
      <PopularSubjectSection />
      <CourseListSection />
      <RegistrationSection />
      <CommentSection />
    </>
  );
};
