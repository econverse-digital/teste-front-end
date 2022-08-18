import BrandsCard from "../cards/BrandsCard";
import SectionTitle from "../SectionTitle";
import { brandsLogos } from "../../helpers/sections";
import "../../css/components/sections/mainBrandsSection.css";

const MainBrandsSection = () => {
  const mappedBrandsCards = brandsLogos.map((logo) => {
    return <BrandsCard image={logo.logo} name={logo.name} key={logo.id} />;
  });

  return (
    <section className="main-brands-section-container">
      <SectionTitle
        title="Principais marcas"
        customizedTitleButton="Ver todos"
      />
      <div className="brand-cards-container">
        {mappedBrandsCards}
        {mappedBrandsCards}
      </div>
    </section>
  );
};

export default MainBrandsSection;
