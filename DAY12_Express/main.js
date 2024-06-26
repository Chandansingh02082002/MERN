//express js is build only on http module of node rest of the things work according to node js
const express = require('express');
var app = express();
const fsPromises = require("fs/promises");

app.use(express.json());
app.get("/products", async (req, res) => {
    const text = await fsPromises.readFile('./data.json', { encoding: "utf8" });
    let products = getData();
 
    products.push(body);
    res.json({
        status: "success",
        data: {
            products: products,
        }
    });
});

const getData = async()=>{
    const text = await fsPromises.readFile('./data.json', { encoding: "utf8"
});
let products;
try{
    products = JSON.parse(text);
}catch{
    products = [];
}
return products;
}
app.post("/products", async (req, res) => {
    // console.log(typeof req);
    // console.log(Object.keys(req));
    // console.log(body);
    // let products;
    let body = req.body;
    const products = await getData();
    let lastId =1;
    if(products.length != 0){
        const prlen = products.length;
        const lastindex = prlen-1;
        const lastItem = products[lastindex];
         lastId = lastItem.id;
    }
   body.id = lastId + 1;
    products.push(body);
    console.log(products);

    await fsPromises.writeFile('./data.json', JSON.stringify(products));
    res.status(201);

    res.json({
        status: "success",
        data:{
            products:body,
        }
    });
});
//in put app.put(path, callback([..,..]));
app.put("/products", (req,res)=>{
    res.send("Put request is called");
});
//to delete first pass id through params and then use .remove function
app.delete("/products/:id", (req,res)=>{
    const productId = req.params.id;
    res.send(`Deleting product with id ${productId}`);
})
app.listen(3000);

// to convert json text  to object we use json.parse and if object is to be converted to text then json.stringify is being used.
