import React from "react";
import * as Style from "./styled";

const Modal = ({ produto, setProduto }) => {
  return (
    <Style.MainContainer>
      <Style.BoxModal>
        <Style.ModalContent>
          <img src={`${produto.photo}`} alt="detalhes" />
          <div>
            <Style.ProductName>{produto.productName}</Style.ProductName>
            <Style.Price>
              R$ {produto.price.toLocaleString("pt-BR")}
            </Style.Price>
            <Style.DescriptionShort>
              {produto.descriptionShort}
            </Style.DescriptionShort>
            <Style.Details>Veja mais detalhes do produto</Style.Details>
          </div>
          <button onClick={() => setProduto("")}>X</button>
        </Style.ModalContent>
      </Style.BoxModal>
    </Style.MainContainer>
  );
};

export default Modal;
