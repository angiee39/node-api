const express = require('express')
const router = express.Router();
const Post = require('../models/Posts')


// get back all the posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
});

// submit a post
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost)
    }catch(err){
        res.json({message: err});
    }   
})

// get specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err})
    }
})

// delete post
router.delete('/:postId', async (req, res) => {
    try{
        const deletedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(deletedPost);
    }catch(err){
        res.json({message: err})
    }
})

// update post
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: { title: req.body.title, description: req.body.description } }
        );
        res.json(updatedPost);
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router;