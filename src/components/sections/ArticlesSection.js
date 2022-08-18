import "../../css/components/sections/articlesSection.css";
import { articlesList } from "../../helpers/sections";
import SectionTitle from "../SectionTitle";
import ArticlesCard from "../cards/ArticlesCard";

const ArticlesSection = () => {
  const mappedArticles = articlesList.map((article) => {
    return (
      <ArticlesCard
        cardImage={article.cardImage}
        key={article.id}
        imageDescription={article.imageDescription}
      />
    );
  });

  return (
    <section className="articles-section-container">
      <SectionTitle title="Confira o nosso Blog" />
      <div className="articles-container">
        <img
          width={32}
          height={32}
          className="category-left-arrow adjust-arrow"
          src="./assets/icons/ArrowTwo.png"
          alt="Seta para esquerda"
        />
        <div className="articles-cards-container">{mappedArticles}</div>
        <img
          width={32}
          height={32}
          className="category-right-arrow adjust-arrow"
          src="./assets/icons/ArrowTwo.png"
          alt="Seta para direita"
        />
      </div>
      <div>
        <img src="./assets/icons/GrayThreeDots.png" alt="Três pontos" />
      </div>
    </section>
  );
};

export default ArticlesSection;
