import React from "react";
import Blog from "../../Components/Blog/Blog";
import Categorias from "../../Components/Categorias/Categorias";
import Header from "../../Components/Header/Header";
import Introducao from "../../Components/Introducao/Introducao";
import Marcas from "../../Components/Marcas/Marcas";
import Parceiros from "../../Components/Parceiros/Parceiros";
import { MainContainer } from "./styled";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <Introducao />
      <Categorias />
      <Marcas />
      <Parceiros />
      <Blog />
    </MainContainer>
  );
};

export default Home;