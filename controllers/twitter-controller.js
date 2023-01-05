const express = require('express')
const router = express.Router()
const { Tweet } = require('../models/')

require("../config/db.connection");

// INDEX ROUTE
router.get("/", async (req, res) => {
	try {
		const allTweets = await Tweet.find({})
		res.status(200).json(allTweets)
	}catch(err){
		console.error(error)
	}
});

// TWEET CREATE ROUTE
router.post("/", async (req, res) =>  {
    try {
        const createTweet = await Tweet.create(req.body)
        res.status(201).json(createTweet)
    } catch(err){
        console.err(error)
       res.status(400).json(error)
    }
});

// TWEET SHOW ROUTE
router.get("/:id", async (req, res) => {
	try {	
		const singleTweet = await Tweet.findById(req.params.id)
		console.log(singleTweet, "the single tweet")
		res.status(200).json(singleTweet)
	}catch(error){
		console.error(error)
	}
});

// TWEET UPDATE ROUTE
router.put("/:id", async (req, res) => {
	try{
		const updatedTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body)
		console.log(updatedTweet)
		res.status(200).json({message: "Successfully updated tweet", updatedTweet})
	}catch(error){
		res.status(400).json({error: "error"})
	}
});

// TWEET DELETE ROUTE
router.delete("/:id", async (req, res) => {
	try{
		const deletedTweet = await Tweet.findByIdAndDelete(req.params.id)
		console.log(deletedTweet)
		res.status(200).json({message: "Deleted Tweet", deletedTweet })	
	}catch(err){
		console.error(err)
	}
});

module.exports = router
