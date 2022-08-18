import SectionTitle from "../SectionTitle";
import CategoriesCard from "../cards/CategoriesCard"
import {categoriesInfos} from "../../helpers/sections"
import '../../css/components/sections/categorySection.css'

const CategorySection = () => {
  const mappedCategoriesCards = categoriesInfos.map((category) => {
    return (
      <CategoriesCard
        image={category.image}
        imageDescription={category.imageDescription}
        imageTitle={category.imageTitle}
        customChange={category.customChange}
        key={category.id}
      />
    );
  });

  return (
    <section className="categories-section">
      <div className="categories-container">
        <SectionTitle title="Categorias" />
        <div className="category-cards-container">
          <img
            width={32}
            height={32}
            className="category-left-arrow"
            src="./assets/icons/ArrowTwo.png"
            alt="Seta para esquerda"
          />
          {mappedCategoriesCards}
          <img
            width={32}
            height={32}
            className="category-right-arrow"
            src="./assets/icons/ArrowTwo.png"
            alt="Seta para direita"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
