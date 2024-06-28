const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    //if you have to give thing other than type then you have to create an object for that, which is further verfied at the time of filling the data
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    thumbnail:{
        type: String,
    },
    images:[],
    description: String,
    metaData:{},
    createdAt:{
        type: Date,
        default:Date.now(),
    },
    updatedAt:{
        type: Date,
        default:Date.now(),
    },
});

const productModel = mongoose.model("product", productSchema)
module.exports=productModel;
