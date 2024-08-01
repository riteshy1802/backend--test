const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const User = require('../models/user');

//Get all the posts
router.get('/', async(req,res)=>{
  try {
    const posts = await Post.find()
    res.json(posts);
  } catch (error) {
    res.status(500).json({message : error.message});
  }
})

//Post a new one : 
router.post('/', async(req,res)=>{
  
  try {
    const {title, content, author} = req.body;
    const authorExists = await User.findOne({name: author})
    if(!authorExists){
      return res.status(400).json({message : error.message});
    }
    const post = new Post({
      title : title,
      content: content,
      author : author
    })

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({message:error.message});
  }
})

// Sample route for getting posts
router.get('/', (req, res) => {
  res.send('Post page');
});

module.exports = router;

//lJIlQ4tfNmRpvKrJ
//riteshrajyadav2006
