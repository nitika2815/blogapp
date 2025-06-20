const Post=require('../models/postModel');
const Like=require('../models/likeModel')

exports.likePost=async (req,res) => {
  try{
    //fetch data from req body
    const {post,user}=req.body;
    //create a new like object
    const like=new Like({
      post,user
    })
    // save that like object 
    const savedLike=await like.save();
    // update post collection baiss on this
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true}).populate("likes").exec();
    res.send({
      data:updatedPost
    })
  }catch(err){
    console.error(err);
    res.status(400).json({
      success:false,
      error:err.message,
      message:"Not created like"
    })
  }
}

exports.getAllLikes=async (req,res) => {
  try {
    const likes=await Like.find();
    res.send({
      data:likes,
      message:"Like's data"
    })
  } catch (error) {
    console.error(err);
    res.status(500).json({
      success:false,
      error:err.message,
      message:"Not created like"
    })
  }
}

exports.unlikePost=async (req,res) => {
  console.log("hello",req.body)
  try {
    const {post,like}=req.body;
    //find and delete the like collection me se
    const deletedLike=await Like.findOneAndDelete({post:post,_id:like})
    //update the post collection
    const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
    res.json({
      post:updatePost,
      message:"data is deleted successfully"
    })
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success:false,
      error:error.message,
      message:"Error while unlikeing post"
    })
  }
}
// exports.getLike=async (req,res) => {
//   const {post,user}=req.body;
//   const id=post._id;
//   try {
//     const like=await Post.findById(id);
//     res.send({
//       data:like
//     })
//   } catch (error) {
//     console.error(err);
//     res.status(500).json({
//       success:false,
//       error:err.message,
//       message:"not found"
//     })
//   }
// }

// exports.deleteLikes=async (req,res) => {
//   const {post,user}=req.body;
//   const id=post._id;
//   try {
//     const like=await Like.findByIdAndDelete(id);
//     const updatedPost=await Post.findByIdAndDelete(id)
//     const savedPost=await updatedPost.save();
//     res.status(500).json({
//       success:true,
//       message:"likes deleted successfully"
//     })
//   } catch (error) {
//     console.error(err);
//     res.status(400).json({
//       success:false,
//       error:err.message,
//       message:"not found"
//     })
//   }
// }
