import React, { useState } from "react";
import Blog from "../../Components/Blog/Blog";
import Categorias from "../../Components/Categorias/Categorias";
import Contato from "../../Components/Contato/Contato";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Instagram from "../../Components/Instagram/Instagram";
import Introducao from "../../Components/Introducao/Introducao";
import Marcas from "../../Components/Marcas/Marcas";
import Modal from "../../Components/Modal/Modal";
import Parceiros from "../../Components/Parceiros/Parceiros";
import Vitrine from "../../Components/Vitrine/Vitrine";
import { MainContainer } from "./styled";

const Home = () => {
  const [produto, setProduto] = useState("")
  // const [modal, setModal] = useState(false)

  return (
    <MainContainer>
      <Header />
      <Introducao />
      <Categorias />
      {produto ? <Modal  produto={produto} setProduto={setProduto}/> : null}
      <Vitrine setProduto={setProduto}/>
      <Marcas />
      <Parceiros />
      <Blog />
      <Instagram />
      <Contato />
      <Footer />
      {/* <Modal  produto={produto}/> */}
    </MainContainer>
  );
};

export default Home;