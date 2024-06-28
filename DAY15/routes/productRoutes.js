const express = require('express');
const { getProducts, createProduct, replaceProduct, deleteProduct, checkID, updateProduct } = require('../controllers/productController');

const productRouter=express.Router();

productRouter.route("/").get(getProducts).post(createProduct);
productRouter.route("/:id").put(checkID,replaceProduct).delete(deleteProduct).patch(updateProduct);
productRouter.route("/list").get((req,res) =>{res.send("hello")});


module.exports = productRouter;