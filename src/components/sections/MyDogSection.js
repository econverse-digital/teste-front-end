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
              {/* pretendia fazer um mapeamento aqui, mas devido
              à limitação dos 4 cards do projeto(como está
              sendo feito quase que completamente estático)
              e como as imagens não estão carregando direto do 
              json, dessa forma facilita bastante a fidelidade dada
              a limitação de tempo */}
              <ProductsCard
                modalSetter={props.setIsModalOn}
                modalImageSetter={props.setModalImage}
                modalDataSetter={props.setModalData}
                product={props.products[0]}
                image="Kong.png"
              />
              <ProductsCard
                modalSetter={props.setIsModalOn}
                modalImageSetter={props.setModalImage}
                modalDataSetter={props.setModalData}
                product={props.products[1]}
                image="Chuckit.png"
              />
              <ProductsCard
                modalSetter={props.setIsModalOn}
                modalImageSetter={props.setModalImage}
                modalDataSetter={props.setModalData}
                product={props.products[2]}
                image="Kong.png"
              />
              <ProductsCard
                modalSetter={props.setIsModalOn}
                modalImageSetter={props.setModalImage}
                modalDataSetter={props.setModalData}
                product={props.products[3]}
                image="Chuckit.png"
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
