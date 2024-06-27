const { productsCollection } = require("../database/db");

const getProducts = (req,res)=>{
    const products = productsCollection.find().toArray();
    res.send({
        status: "Success",
        products:products
    });
};

const createProduct = async(req,res)=>{
    const body = req.body;
    const newProduct = await productsCollection.insertOne(body);
    if(!body.title || !body.price){
        try{

            res.status(400);
            res.json({
                status: "Error",
                message: "Title and price is required"
            });
            return;
        }catch(err){
            console.log(err);
        }
    }
        
        res.json({
            status: "Success",
            message:`new product inserted ${newProduct} `,
            data: {products:newProduct}
        });
};

module.exports = {getProducts, 
     createProduct
};