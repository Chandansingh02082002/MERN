const express = require("express");
const {
    getProducts,
    getDataMiddleware,
    createProduct,
    replaceProduct,
    deleteProduct,
    updateProduct,
    validateForTitleAndPrice,
    validID,
} = require("../controllers/productControllers.js");

const productRouter = express.Router();

productRouter.use(getDataMiddleware);
productRouter.route("/").get(getProducts).post(validateForTitleAndPrice, createProduct);
productRouter.route("/:id").put(validateForTitleAndPrice, replaceProduct, validID).patch(updateProduct, validID).delete(deleteProduct, validID);

module.exports = productRouter;