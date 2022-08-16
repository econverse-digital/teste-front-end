import React from "react";
import * as Style from "./styled";
import photo1 from "../../Assets/img/instagram/image24.png";
import photo2 from "../../Assets/img/instagram/image25.png";
import photo3 from "../../Assets/img/instagram/image26.png";

const Instagram = () => {
  return (
    <Style.MainContainer>
      <Style.InfoContainer>
        <h2>Instagram</h2>
        <span>+Seguir</span>
      </Style.InfoContainer>
      <Style.Feed>
        <img src={photo2} alt="Cachorro comendo" />
        <img src={photo3} alt="Cachorro dormindo" />
        <img src={photo1} alt="Cachorro brincando" />
        <img src={photo2} alt="Cachorro comendo" />
        <img src={photo3} alt="Cachorro dormindo" />
      </Style.Feed>
    </Style.MainContainer>
  );
};

export default Instagram;
