const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
 //kon si post pe comment kr rhe hai uski id
 post:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'Post',//reference to the post
  },
  body:{
    type:String,
    required:true
  },
  user:{
    type:String,
    required:true
  }
 })
//export
module.exports=mongoose.model("Comment",commentSchema);