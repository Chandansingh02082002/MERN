require('dotenv').config();
require("./database/db");
const express = require('express');
const { productsCollection, database } = require('./database/db.js');
const { getProduct, postProduct } = require('./controllers/productController.js');
const app = express();
app.use(express.json());
app.get("/products", getProduct)

app.post("/products",postProduct)
app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});
