const Post=require('../models/postModel');
const Comment=require('../models/commentModel');

exports.createComments=async (req,res) => {
  console.log(req.body)
  try{
    // have to create an object so firstly we fetch the data from request's body
    const {post ,user,body}=req.body;
    //create an object here
    const comment=new Comment({
      post,user,body
    });
    //new id bn gai hogi
    const savedComment=await comment.save();

    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
    .populate("comments").exec();//populate the comments array with comment documents
    res.send({
      data:updatedPost
    });
  }
  catch(err){
    console.error(err);
    res.status(500).json({
      success:false,
      message:"Comment is not created"
    })
  }  
}

exports.getAllComments=async (req,res) => {
  console.log(req.body)
  try{
    const comments=await Comment.find();
    res.send({
      data:comments
    })
  }
  catch(err){
    console.error(err);
    res.status(500).json({
      success:false,
      message:"Comment is not created"
    })
  }  
}