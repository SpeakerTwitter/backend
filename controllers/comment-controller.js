const express = require('express')
const router = express.Router()
const { Comment } = require('../models/')

// COMMENT INDEX ROUTE
router.get("/", async (req, res, next) => {
    try {
        const allComments = await Comment.find({})
        res.status(200).json(allComments)
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
});

// COMMENT CREATE ROUTE
router.post("/", async (req, res, next) =>  {
    try {
        const createComment = await Comment.create(req.body)
        res.status(201).json(createComment)
    } catch(err){
		res.status(400).json({error: "error"})
        return next(err)
    }
});

//SHOW ROUTE 
router.get('/:id', async (req, res, next) =>{
    try{
        const singleComment = await Comment.findById(req.params.id)
        console.log(singleComment)
        res.status(200).json(singleComment)
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
});

//UPDATE ROUTE
router.put('/:id', async (req, res, next) =>{
    try{
        const updatedComment= await Comment.findByIdAndUpdate(req.params.id, req.body)
        console.log(updatedComment)
        res.status(200).json(updatedComment)
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
})

//DELETE ROUTE 
router.delete('/:id', async (req, res, next) =>{
    try{
        const deletedComment = await Comment.findByIdAndDelete(req.params.id)
        console.log(deletedComment)
        res.redirect('/comments')
    }catch(error){
        res.status(400).json({error: "error"})
        return next(err)
    }
});


module.exports = router 