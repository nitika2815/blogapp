require('dotenv').config();
const mongoose=require('mongoose');

const dbConnect=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MondoDb connected successfully");
  }catch(err){
    console.log("server error");
    process.exit(1);
  }
}

module.exports=dbConnect;
