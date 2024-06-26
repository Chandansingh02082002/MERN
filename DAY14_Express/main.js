require('dotenv').config();
require("./database/db");
const express = require('express');
const { productsCollection, database } = require('./database/db.js');
const app = express();
app.use(express.json());
app.get("/products", async (req,res)=>{
  const products = await productsCollection.find().toArray();
  res.json({
    status: "success",
    data: {
      products:products,
    }
  })


  console.log("\n✅: products", products);
});
app.post("/products", async(req, res)=>{
  const body = req.body;
  if(!body.title || !body.price){
     res.status(400);
     res.json({
      status : "fail",
      message : "Title and Price are not given"
     });
    return;
  }
  const result = await productsCollection.insertOne(body);
  res.json({
    status: "success",
    data:{
      products:result,
    },
  })
  
})
app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});
