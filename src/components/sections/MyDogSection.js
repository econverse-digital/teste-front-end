import SectionTitle from "../SectionTitle";
import "../../css/components/sections/myDogSection.css";
import ProductsCard from "../cards/ProductsCard";

const MyDogSection = (props) => {
  return (
    <section className="my-dog-section">
      <div className="my-dog-container">
        <SectionTitle title="Meu cachorro..." productNav={true} />
        <div className="my-dog-content-container">
          <img
            width={32}
            height={32}
            className="category-left-arrow"
            src="./assets/icons/ArrowTwo.png"
            alt="Seta para esquerda"
          />
          {props.products[0] && (
            <div className="product-cards-container">
              <ProductsCard
                image="Kong.png"
                productName={`${props.products[0].productName}`}
              />
              <ProductsCard
                image="Chuckit.png"
                productName={`${props.products[1].productName}`}
              />
              <ProductsCard
                image="Kong.png"
                productName={`${props.products[2].productName}`}
              />
              <ProductsCard
                image="Chuckit.png"
                productName={`${props.products[3].productName}`}
              />
            </div>
          )}
          <img
            width={32}
            height={32}
            className="category-right-arrow"
            src="./assets/icons/ArrowTwo.png"
            alt="Seta para direita"
          />
        </div>
      </div>
      <h4 className="title-underlined-button">Ver todos</h4>
      <img src="./assets/icons/FiveDots.png" alt="Cinco pontos de rolagem" />
    </section>
  );
};

export default MyDogSection;
