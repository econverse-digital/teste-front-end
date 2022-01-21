const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

var cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  axios
    .get(
      "http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json"
    )
    .then((response) => {
      res.send(response.data.products);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
