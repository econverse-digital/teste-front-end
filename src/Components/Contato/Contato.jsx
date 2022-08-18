import React from "react";
import * as Style from "./styled";
import dog from "../../Assets/img/contato/image2.png";
import email from "../../Assets/img/contato/email.png";
import user from "../../Assets/img/header/user.JPG";

const Contato = () => {
  return (
    <Style.MainContainer>
      <img src={dog} alt="" />
      <Style.BoxForm>
        <h5>Se inscreva para receber novidades e promoções</h5>
        <div>
          <img src={user} alt="" />
          <input type="text" placeholder=" Digite seu nome" />
        </div>
        <div>
          <img src={email} alt="" />
          <input type="text" placeholder="Digite seu e-mail" />
        </div>
        <button>Enviar</button>
      </Style.BoxForm>
    </Style.MainContainer>
  );
};

export default Contato;
