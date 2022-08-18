import axios from "axios";
import { BASE_URL } from "../helpers/baseUrl";

export const getProducts = (setProducts) => {
  axios
    .get(`${BASE_URL}`)
    .then((res) => {
      setProducts(res.data.products);
    })
    .catch((err) => {
      alert("Ocorreu um erro! Se houver algum problema, recarregue a página.");
    });
};
