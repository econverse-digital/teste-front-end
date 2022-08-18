import Header from "./components/layout/Header";
import MainBanner from "./components/layout/MainBanner";
import CategorySection from "./components/sections/CategorySection";
import MyDogSection from "./components/sections/MyDogSection";
import SectionTitle from "./components/SectionTitle";
import { getProducts } from "./services/products";
import React, { useState, useEffect } from "react";
import "./css/global.css";
import DefaultModal from "./components/modal/DefaultModal";
import MainBrandsSection from "./components/sections/MainBrandsSection";

function App() {
  const [products, setProducts] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div>
      <DefaultModal
        modalData={modalData}
        modalImage={modalImage}
        isModalOn={isModalOn}
        setIsModalOn={setIsModalOn}
      />
      <Header />
      <MainBanner />
      <CategorySection />
      <MyDogSection
        products={products}
        setIsModalOn={setIsModalOn}
        setModalData={setModalData}
        setModalImage={setModalImage}
      />
      <MainBrandsSection />
      <section>
        CARDS DE DESTAQUE
        <article>Parceiros</article>
        <article>Assinatura Cãoselheiro </article>
      </section>
      <section>
        <SectionTitle title="Confira o nosso Blog" />
        <article>cards de artigo</article>
      </section>
      <section>
        <SectionTitle title="Instagram" />
      </section>
      <section>
        INSCRIÇÃO
        {/* <img>imagem cachorrin</img> */}
        <form>*formulario*</form>
      </section>
      <footer>
        footer
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
