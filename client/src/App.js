import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Shop from "./components/Shop/Shop";
import Brands from "./components/Brands/Brands";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import axios from "axios";
import ItemModal from "./components/UI/ItemModal";

function App() {
  const [dataAPI, setData] = useState();
  const [itemData, setItemData] = useState();
  const getData = () => {
    axios.get("http://localhost:3001/api").then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  });

  const itemHandler = (item) => setItemData(item);

  return (
    <div>
      <header>
        <Header />
      </header>
      {itemData ? (
        <aside>
          <ItemModal
            title={itemData.productName}
            message={itemData.descriptionShort}
            image={itemData.photo}
            valor={itemData.price}
            onClick={() => setItemData("")}
          />
        </aside>
      ) : (
        ""
      )}
      <main>
        <Body />
        {dataAPI ? <Shop list={dataAPI} setItemData={itemHandler} /> : ""}
        <Brands />
        <AboutUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
