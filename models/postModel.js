// one post has many likes and many comments as well
const mongoose=require('mongoose');

//router handler
const postSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxLength:50,
  },
  body:{
    type:String,
    required:true,
    maxLength:50,
  },
  //array k under id hai and kiski id h like model ki
  likes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like"//reference to the like
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"//reference to the comments
  }]
})
//export
module.exports=mongoose.model("Post",postSchema);