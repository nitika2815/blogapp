const express=require('express');
const { createComments, getAllComments } = require('../controllers/commentController');
const { likePost, getAllLikes, unlikePost } = require('../controllers/likeController');
const { createPost, getAllPosts, getPost } = require('../controllers/postController');
const router=express.Router();
//Import controller

//comments create karne ka route
router.post('/comments/create',createComments);
router.get('/comments/all',getAllComments)

//likes create karne ka route
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost)

//post create karne ka route
router.post('/posts/create',createPost);
router.get('/posts/all',getAllPosts)
router.get('/posts/:id',getPost);
router.get('/likes/all',getAllLikes);
// router.get('/like/:id',getLike);
// router.get('/like/:id',getLike);
// router.delete('/like/:id',deleteLikes)
//Mapping create

//export
module.exports=router