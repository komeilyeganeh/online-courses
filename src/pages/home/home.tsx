import { BrandSection } from "./sections/brand/brand";
import { HeroSection } from "./sections/hero/hero";

export const Home: React.FC = () => {
  // ---- jsx return ----
  return (
    <>
      <HeroSection />
      <BrandSection />
    </>
  );
};
