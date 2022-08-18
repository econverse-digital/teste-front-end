import React from "react";
import * as Style from "./styled";
import shield from "../../Assets/img/header/shield.JPG";
import truck from "../../Assets/img/header/truck.JPG";
import cart from "../../Assets/img/header/cart.JPG";
import caoselheiro from "../../Assets/img/header/caoselheiro.png";
import group from "../../Assets/img/header/group.png";
import heart from "../../Assets/img/header/heart.png";
import user from "../../Assets/img/header/user.JPG";
import card from "../../Assets/img/header/card.JPG";
import lupa from "../../Assets/img/header/lupa.png";
import crown from "../../Assets/img/header/crown.png";

const Header = () => {
  return (
    <Style.MainContainer>
      <Style.InfoContainer>
        <Style.Infos>
          <img src={shield} alt="shield" />
          <Style.GrayP>Compra</Style.GrayP>
          <Style.YellowP>100% segura</Style.YellowP>
        </Style.Infos>
        <Style.Infos>
          <img src={truck} alt="truck" />
          <Style.YellowP>Frete grátis</Style.YellowP>
          <Style.GrayP>acima de R$ 200</Style.GrayP>
        </Style.Infos>
        <Style.Infos>
          <img src={card} alt="cart" />
          <Style.GrayP>Parcele </Style.GrayP>
          <Style.YellowP>suas compras</Style.YellowP>
        </Style.Infos>
      </Style.InfoContainer>

      <Style.Search>
        <Style.ImgLogo src={caoselheiro} alt="logo site" />
        <Style.BoxSearch>
          <input type="text" placeholder=" O que você esta buscando?"/>
          <img src={lupa} alt="pesquisar" />
        </Style.BoxSearch>
        <Style.InfoSearch>
          <img src={group} alt="group" />
          <img src={heart} alt="favorite" />
          <img src={user} alt="user" />
          <img src={cart} alt="card" />
        </Style.InfoSearch>
      </Style.Search>

      <Style.BoxNav>
        <span>BRINCAR</span>
        <span>MORDER</span>
        <span>COMER</span>
        <span>PASSEAR</span>
        <span>CASA E CONFORTO</span>
        <span>EDUCAÇÃO</span>
        <span className="oferta">OFERTAS</span>
        <span>
          <img src={crown} alt="coroa" /> COLEÇÃO DE OUTONO
        </span>
      </Style.BoxNav>
    </Style.MainContainer>
  );
};

export default Header;
