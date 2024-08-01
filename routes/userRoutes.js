const express = require('express')
const router = express.Router()
const User = require('../models/user');

router.get('/',(req,res)=>{
    res.send("Hey this is your user !")
})

router.get('/', async(req,res)=>{
    try {
        const user = await User.find()
        res.json(user)
    } catch (error) {
        res.status(400).json({message : error.message});
    }
})

router.post('/', async (req,res)=>{
    const {name, email, password} = req.body
    const user = new User({
        name : name,
        email : email,
        password : password
    })
    try {
        const existing = await User.findOne({email: email})
        if(existing){
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        await user.save()
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
})

module.exports = router;