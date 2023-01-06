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
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "Comment create route"})
});

module.exports = router 