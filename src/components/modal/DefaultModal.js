import "../../css/components/modal/defaultModal.css";

const DefaultModal = (props) => {
  const formatPrice = (price) => {
    const stringPrice = price.toString();
    const lengthPrice = stringPrice.length;
    const formattedPrice =
    stringPrice.substring(0, lengthPrice - 2) +
      "," +
      stringPrice.substring(lengthPrice - 2);
    return formattedPrice;
  };

  return (
    <div
      className={
        props.isModalOn ? "modal-background-settings" : "modal-invisible"
      }
    >
      <div className="modal-settings">
        <div className="modal-image">
          <img
            width={180}
            height={180}
            src={`./assets/images/products/${props.modalImage}`}
            alt={`${props.modalData.descriptionShort}`}
          />
        </div>
        <div className="modal-info">
          <h1 className="modal-info-product">{props.modalData.productName}</h1>
          <h1 className="modal-info-price">
            R$ {props.modalData.price && formatPrice(props.modalData.price)}
          </h1>
          <p>{props.modalData.descriptionShort}</p>
          <h2>Veja mais detalhes do produto</h2>
          <h3>Adicionar ao carrinho</h3>
        </div>
        <div className="modal-close">
          <img
            onClick={() => props.setIsModalOn(false)}
            width={16}
            height={16}
            src="./assets/icons/Close.png"
            alt="Ícone fechar"
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultModal;
