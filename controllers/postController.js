const Post=require('../models/postModel');

exports.createPost=async (req,res) => {
  try {
    //fetch data from request body
    const{title,body}=req.body;
    //create a post object
    const post=new Post({
      title,body
    })
    //save the post into the database
    const savedPost= await post.save();

    //show all the data 
    res.status(500).json(
      {
        post:savedPost
      }
    )
  } catch (error) {
    console.error(err);
    res.status(404).json({
      success:false,
      error:err.message,
      message:"Error while creating post",
    })
  }
}

exports.getAllPosts=async (req,res) => {
  try {
    // yaha pr sirf id dekhni hoti to only find function ka use karte but abhi hme sara data dekhna hai so hum populate ka use karege
    const posts=await Post.find().populate("likes").populate('comments').exec();
    res.json({
      data:posts
    })
  } catch (error) {
    console.error(err);
    res.status(404).json({
      success:false,
      error:err.message,
      message:"Error in finding all posts"
    })
  }
}

exports.getPost=async (req,res) => {
  const {id}=req.body;
  try {
    const post=await Post.findById(id).populate("likes").populate('comments').exec();
    res.json({
      data:post
    })
  } catch (error) {
    console.error(err);
    res.status(404).json({
      success:false,
      error:err.message,
      message:"not single comment"
    })
  }
}