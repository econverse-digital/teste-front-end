import React from "react";
import * as Style from "./styled";
import dog from "../../Assets/img/contato/image2.png";

const Contato = () => {
  return (
    <Style.MainContainer>
      <img src={dog} alt="" />
      <Style.BoxForm>
        <h5>Se inscreva para receber novidades e promoções</h5>
        <form>
          <input type="text" placeholder=" Digite seu nome" />
          <input type="text" placeholder="Digite seu e-mail" />
        </form>
        <button>Enviar</button>
      </Style.BoxForm>
    </Style.MainContainer>
  );
};

export default Contato;
