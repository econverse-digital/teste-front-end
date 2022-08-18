import React from "react";
import * as Style from "./styled";
import marca1 from "../../Assets/img/marcas/image18.png";
import marca2 from "../../Assets/img/marcas/image19.png";
import marca3 from "../../Assets/img/marcas/image17.png";

const Marcas = () => {
  return (
    <Style.MainContainer>
      <Style.InfoContainer>
        <h2>Principais marcas</h2>
        <span>Ver todos</span>
      </Style.InfoContainer>

      <Style.BoxMarcas>
        <Style.Marca>
          <img src={marca1} alt="" />
        </Style.Marca>
        <Style.Marca>
          <div>

          <img src={marca2} alt="" />
          </div>
        </Style.Marca>
        <Style.Marca>
          <img src={marca3} alt="" />
        </Style.Marca>
        <Style.Marca>
          <img src={marca1} alt="" />
        </Style.Marca>
        <Style.Marca>
          <img src={marca2} alt="" />
        </Style.Marca>
        <Style.Marca>
          <img src={marca3} alt="" />
        </Style.Marca>
      </Style.BoxMarcas>
    </Style.MainContainer>
  );
};

export default Marcas;
