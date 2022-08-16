import React from "react";
import * as Style from "./styled";
import dog1 from "../../Assets/img/parceiros/image45.png";
import dog2 from "../../Assets/img/parceiros/imagedog.png";

const Parceiros = () => {
  return (
    <Style.MainContainer>
      <Style.BoxParceiro>
        <img src={dog1} alt="cachorro correndo" />
        <h4>Parceiros</h4>
        <p>Lorem ipsum dolor sit amet. dolor sit ame</p>
        <button>CONFIRA</button>
      </Style.BoxParceiro>
      <Style.BoxAssinatura>
        <div>
          <h4>Assinatura Cãoselheiro</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            laboriosam.
          </p>
          <button>SAIBA MAIS</button>
        </div>
        <Style.ImgDog>
          <img src={dog2} alt="cahorro com a boca aberta" />
        </Style.ImgDog>
      </Style.BoxAssinatura>
    </Style.MainContainer>
  );
};

export default Parceiros;
