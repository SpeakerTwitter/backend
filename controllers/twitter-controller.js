const express = require('express')
const router = express.Router()
const { Tweet } = require('../models/')

require("../config/db.connection");

// INDEX ROUTE
router.get("/", async (req, res, next) => {
	try {
		const allTweets = await Tweet.find({})
		res.status(200).json(allTweets)
	}catch(err){
		res.status(400).json({error: "error"})
        return next(err)
	}
});

// TWEET CREATE ROUTE
router.post("/", async (req, res, next) =>  {
    try {
        const createTweet = await Tweet.create(req.body)
        res.status(201).json(createTweet)
    } catch(err){
		res.status(400).json({error: "error"})
        return next(err)
    }
});

// TWEET SHOW ROUTE
router.get("/:id", async (req, res, next) => {
	try {	
		const singleTweet = await Tweet.findById(req.params.id)
		console.log(singleTweet, "the single tweet")
		res.status(200).json(singleTweet)
	}catch(error){
		res.status(400).json({error: "error"})
        return next(err)
	}
});

// TWEET UPDATE ROUTE
router.put("/:id", async (req, res, next) => {
	try{
		const updatedTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body)
		console.log(updatedTweet)
		res.status(200).json({message: "Successfully updated tweet", updatedTweet})
	}catch(error){
		res.status(400).json({error: "error"})
        return next(err)
	}
});

// TWEET DELETE ROUTE
router.delete("/:id", async (req, res, next) => {
	try{
		const deletedTweet = await Tweet.findByIdAndDelete(req.params.id)
		console.log(deletedTweet)
		res.status(200).json({message: "Deleted Tweet", deletedTweet })	
	}catch(err){
		res.status(400).json({error: "error"})
        return next(err)
	}
});

module.exports = router