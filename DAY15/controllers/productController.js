const productModel = require("../models/projectModels.js")
const { productsCollection } = require("../database/db");

const checkID = async(req, res, next)=>{
   try{
       const {id} = req.params;
       const product = await productModel.findById(id);
       if(!product){
        res.status(404);
        res.send({
            status: "fail",
            message:"Product ID not found !",
        });
        return;
    }
    next();
    }catch(err){
        if(err.name ==="CastError"){

            res.status(404)
            res.send({
                status: "fail",
                message:"Invalid productID"
            });
            return;
        };
    }
    // next();
}
const getProducts = async(req,res)=>{
    const products = await productModel.find({

    });
    res.send({
        status: "Success",
        data:{
            products,
        },
    });
    // const products = productsCollection.find().toArray();
};

const createProduct = async(req,res)=>{
    const body = req.body;
    const newProduct = await productModel.create(body);
    console.log( body);
     try{
        res.json({
                    status: "Success",
                    message:`new product inserted ${newProduct} `,
                    data: {products:newProduct}
                
                });
    }
    catch(err){
        res.status(500)
        console.log(err);
        res.json({
            status: "Failed",
            message: "Internal Server Error",
            info:err,

        });
    }
    // if(!body.title || !body.price){
    //     try{

    //         res.status(400);
    //         res.json({
    //             status: "Error",
    //             message: "Title and price is required"
    //         });
    //         return;
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
        
    //   
};
const replaceProduct = async(req,res)=>{
    try{

        const { id }=req.params;
        const body = req.body;
        const replaceProduct = await productModel.findOneAndReplace({_id: id}, body);
        res.status(201);
        res.json({
            
            status: "Success",
            data:{
                product: replaceProduct,
            },
        });
    }catch(err){
        res.status(500);
        res.send({
            status: "Failed",
            message: "Internal Server Error",
        });
    };
};

const deleteProduct = async(req,res)=>{
    
    const {id} = req.params;
    await productModel.findOneAndDelete({_id:id});
    try{

        res.status(201);
        res.send({
            status: "Success",
            data:{
                product: null,
            },
        });
    }catch(err){
        res.status(500);
        res.send({
            status: "Failed",
            message: "Internal Server Error",
        });
    };
}

const updateProduct = async(req,res)=>{
try{
    const {id}  = req.params;
    const body = req.body;
    body.updateAt = Date.now();
    const newProduct = await productModel.findOneAndUpdate(
        {_id: id}, 
        body,
        

        {
            new:true
        }
);
        res.status(201);
        res.send({
            status: "Success",
            message:"Product Upadated successfully",
            data: newProduct,
        });
        return;
    }
    catch(err){
        res.status(500);
        res.send({
            status: "Failed",
            message: "Internal Server Error",
        });
        return;
    }
}
module.exports = {checkID,getProducts, 
     createProduct,replaceProduct,deleteProduct,updateProduct
};