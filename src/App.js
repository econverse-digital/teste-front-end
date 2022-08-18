import Header from "./components/layout/Header";
import MainBanner from "./components/layout/MainBanner";
import CategoriesSection from "./components/sections/CategoriesSection";
import MyDogSection from "./components/sections/MyDogSection";
import { getProducts } from "./services/products";
import React, { useState, useEffect } from "react";
import "./css/global.css";
import DefaultModal from "./components/modal/DefaultModal";
import MainBrandsSection from "./components/sections/MainBrandsSection";
import HighlightsSection from "./components/sections/HighlightsSection";
import ArticlesSection from "./components/sections/ArticlesSection";
import InstagramSection from "./components/sections/InstagramSection";
import NewsletterSection from "./components/sections/NewsletterSection";
import Footer from "./components/layout/Footer";

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
      <CategoriesSection />
      <MyDogSection
        products={products}
        setIsModalOn={setIsModalOn}
        setModalData={setModalData}
        setModalImage={setModalImage}
      />
      <MainBrandsSection />
      <HighlightsSection />
      <ArticlesSection />
      <InstagramSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
