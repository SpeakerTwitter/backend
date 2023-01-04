const express = require('express')
const router = express.Router()
const { Tweet } = require('../models/')

require("../config/db.connection");

// INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "people index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(200).json({message: "Tweet create route"})
});

module.exports = router
