const express = require('express');

const router= express.Router();
const Post = require('../models/Post');


router.get('/' , async (req,res) => {
    try{
      const post = await Post.find();
      res.json(post)
    }catch{
        res.json({message:"something went wrong!"})
    }
});
router.get('/:postId' , async (req,res) => {
    try{
      const post = await Post.findById(req.params.postId);
res.json(post)  
    }
    catch (err){
        res.json({message:err})

    }

});

router.post('/', async (req,res) => {
   const post = new Post({
       title: req.body.title,
       description: req.body.description

   });
  const savedPost = await post.save()
 res.json(savedPost);
});

module.exports = router;