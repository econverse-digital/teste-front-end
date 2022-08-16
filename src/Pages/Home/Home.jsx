import React from "react";
import Categorias from "../../Components/Categorias/Categorias";
import Header from "../../Components/Header/Header";
import Introducao from "../../Components/Introducao/Introducao";
import { MainContainer } from "./styled";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Introducao />
      <Categorias />
    </MainContainer>
  );
};

export default Home;
