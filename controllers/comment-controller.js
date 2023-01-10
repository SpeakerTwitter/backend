const express = require('express')
const router = express.Router()
const { Comment } = require('../models/Index')
const { Tweet } = require('../models/Index')

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

// POST ROUTE
router.post('/:id', async (req, res, next) => {
	try {
	const tweet = await Tweet.findById(req.params.id)
    console.log(tweet)
    console.log(req.body.name)
	const commentToCreate = {
		name: req.body.name,
		title: req.body.title,
		image: req.body.image
	}
	tweet.comments.push(commentToCreate)
	await tweet.save()
    res.status(200).json({message:"success"})
	} catch(err) {
		next(err)
	} 
})

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

module.exports = router 