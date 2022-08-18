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
        <img
          width={32}
          height={32}
          className="category-left-arrow"
          src="./assets/icons/ArrowTwo.png"
          alt="Seta para esquerda"
        />
        {mappedBrandsCards}
        {mappedBrandsCards}
        <img
          width={32}
          height={32}
          className="category-right-arrow"
          src="./assets/icons/ArrowTwo.png"
          alt="Seta para direita"
        />
      </div>
    </section>
  );
};

export default MainBrandsSection;
