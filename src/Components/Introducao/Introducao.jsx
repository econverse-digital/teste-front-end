import React from "react";
import * as Style from "./styled";
import introducao from "../../Assets/img/introducao/image48.png";

const Introducao = () => {
  return (
    <Style.MainContainer>
      <img src={introducao} alt="" />
      <span className="left">ᐸ</span>
      <span className="right">ᐳ</span>
      <Style.Info>
        <div>As melhores guias para os melhores passeios.</div>
        <button>CONFIRA</button>
      </Style.Info>
    </Style.MainContainer>
  );
};

export default Introducao;
