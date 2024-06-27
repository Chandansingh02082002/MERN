const express = require('express');
const { getProduct } = require('../controllers/productController');
const productRouter = express.Router();

productRouter.route("/products")
.get(getProduct)
.post(getProduct);

module.exports = productRouter;