require('dotenv').config();
require("./database/db");
const express = require('express');
const { productsCollection, database } = require('./database/db.js');
const { getProduct, postProduct } = require('./controllers/productController.js');
const productRouter = require('./routes/productRoutes.js');
const app = express();
app.use(express.json());
app.use(productRouter);
// app.route("/products").get(getProduct).post(postProduct);
app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});
