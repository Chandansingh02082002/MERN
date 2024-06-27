require("dotenv").config();
const express = require("express");
//to allow express to use body functions like req.body
const app = express();
app.use(express.json()); 
const productRouter = require("./routes/productRoutes.js");
app.use("/api/v1/products",productRouter);
// app.get("/", (req,res)=>{
//     res.send("Welcome to the API");
// })

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})