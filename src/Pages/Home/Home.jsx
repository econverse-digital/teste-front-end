import React from "react";
import Header from "../../Components/Header/Header";
import Introducao from "../../Components/Introducao/Introducao";
import { MainContainer } from "./styled";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Introducao />
    </MainContainer>
  );
};

export default Home;
