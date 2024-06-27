const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const uri = "mongodb+srv://<username>:<password>@cluster0.viknpp4.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let dbURL =uri;
dbURL = dbURL.replace("<username>",process.env.DB_USERNAME); 
dbURL = dbURL.replace("<password>",process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>",process.env.DB_NAME);
console.log(process.env.PORT);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(dbURL);

// const database = client.db("DAY15");
// const productsCollection=database.collection("products");

// module.exports={
//     productsCollection,
// }

//common error that occurs oftenly is cannot read the properties name of undefined

