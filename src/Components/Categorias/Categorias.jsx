import React from "react";
import * as Style from "./styled";
import dog1 from "../../Assets/img/categoria/image40.png";
import dog2 from "../../Assets/img/categoria/image41.png";
import dog3 from "../../Assets/img/categoria/image42.png";
import dog4 from "../../Assets/img/categoria/image43.png";

const Categorias = () => {
  return (
    <Style.MainContainer>
      <h2>Categorias</h2>
      <Style.Dogs>
        <Style.Span>
          <img src={dog1} alt="cachorro com bola" />
          <p>Brinquedos</p>
        </Style.Span>
        <Style.Span>
          <img src={dog2} alt="cachorro comendo" />
          <p>Petiscos</p>
        </Style.Span>
        <Style.Span>
          <img src={dog3} alt="cachorro parado" />
          <p>Guias</p>
        </Style.Span>
        <Style.Span>
          <img src={dog4} alt="cachorro banho" />
          <p>Higiene</p>
        </Style.Span>
      </Style.Dogs>
    </Style.MainContainer>
  );
};

export default Categorias;
