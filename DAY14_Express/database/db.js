const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@cluster0.viknpp4.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let dbURL =uri;
dbURL = dbURL.replace("<username>",process.env.DB_USERNAME); 
dbURL = dbURL.replace("<password>",process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>",process.env.DB_NAME);
console.log(process.env.PORT);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbURL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// async function run() {
//   try {

//     const database =client.db(process.env.DB_NAME);
//     const products = database.collection("products")
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     products.insertOne({"title": "ASUS LAPTOP", 
//                         "price": "85000"
//     });
//   }catch(err){
//     console.log(err);
//   }
// }
// run();

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collections("products");

module.exports={
    database, 
    productsCollection,

};