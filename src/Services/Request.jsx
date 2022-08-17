import axios from "axios";

export const GetData =  (input) => {
const {request} = input
  axios
  .get("Vitrine.json")
  .then((res) => {
    request(res.data.products);
  })
  .catch((err) => {
    alert(err.response);
  });
}