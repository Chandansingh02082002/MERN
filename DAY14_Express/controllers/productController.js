const getProduct =async (req,res)=>{
    const products = await productsCollection.find().toArray();
    res.json({
      status: "success",
      data: {
        products:products,
      }
    })}

const postProduct =  async(req, res)=>{
    const body = req.body;
    if(!body.title || !body.price){
      try{

        res.status(400);
        res.json({
          status : "fail",
          message : "Title and Price are not given"
        });
        return;
      }catch(err){
      console.log(err);
    }
    const result = await productsCollection.insertOne(body);
    res.json({
      status: "success",
      data:{
        products:result,
      },
})}
}
    module.exports = {getProduct, postProduct};