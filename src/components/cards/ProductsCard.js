import "../../css/components/cards/productsCard.css";
import DefaultButton from "../buttons/DefaultButton";

const ProductsCard = (props) => {
  return (
    <div className="product-card">
      <div className="product-card-base">
        <div className="product-discount-percentage-box">
          <p className="product-discount-percentage-text">40% OFF</p>
        </div>
        <div
          onClick={() => {
            props.modalSetter(true);
            props.modalDataSetter(props.product);
            props.modalImageSetter(props.image);
          }}
          className="product-card-info"
        >
          <img
            width={180}
            height={180}
            src={`./assets/images/products/${props.image}`}
            alt={props.description}
          />
          <h3 className="product-name">{props.product.productName}</h3>
          <h4 className="product-old-price">De R$ 96,69</h4>
          <div className="product-price">
            <span className="format-one">Por</span>{" "}
            <span className="format-two">R$ 90,69</span>
          </div>
          <div className="product-subscriber-price">
            <p>R$ 85,69</p>
            <span>Para assinantes</span>
          </div>
        </div>
        <img
          className="product-love-icon"
          width={32}
          height={32}
          src="./assets/icons/header-menu/Heart.png"
          alt="Ícone de coração"
        />
      </div>
      <DefaultButton buttonType="big-orange-button" buttonName="Adicionar" />
    </div>
  );
};

export default ProductsCard;
