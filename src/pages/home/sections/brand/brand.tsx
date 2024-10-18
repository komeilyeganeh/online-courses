import BrandOneImg from "@images/brands/brand_1.webp";
import BrandTwoImg from "@images/brands/brand_2.webp";
import BrandThreeImg from "@images/brands/brand_3.webp";
import BrandFourImg from "@images/brands/brand_4.webp";
import BrandFiveImg from "@images/brands/brand_5.webp";

export const BrandSection: React.FC = () => {
  // ---- jsx return ----
  return (
    <section className="mt-4">
      <div className="container bg-white flex items-center justify-between p-10 rounded-xl shadow-md">
        <img src={BrandOneImg} alt="brand image" />
        <img src={BrandTwoImg} alt="brand image" />
        <img src={BrandThreeImg} alt="brand image" />
        <img src={BrandFourImg} alt="brand image" />
        <img src={BrandFiveImg} alt="brand image" />
      </div>
    </section>
  );
};
