import DefaultButton from "../buttons/DefaultButton";
import "../../css/components/cards/articlesCard.css";

const ArticlesCard = (props) => {
  return (
    <div className="article-card-container">
      <img
        src={`./assets/images/${props.cardImage}`}
        alt={`${props.imageDescription}`}
      />
      <div className="article-card-info">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim
          posuere vitae.
        </p>
        <DefaultButton
          buttonName="Ler artigo"
          buttonType="medium-orange-button"
        />
      </div>
    </div>
  );
};

export default ArticlesCard;
