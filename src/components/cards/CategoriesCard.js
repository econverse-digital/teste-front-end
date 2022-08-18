import "../../css/components/cards/categoriesCard.css";

const CategoriesCard = (props) => {
  return (
    <div className="category-card">
      <img
        className={`${props.customChange}`}
        width={277}
        height={277}
        src={`./assets/${props.image}`}
        alt={`${props.imageDescription}`}
      />
      <p>{props.imageTitle}</p>
    </div>
  );
};

export default CategoriesCard;
