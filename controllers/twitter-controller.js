const express = require('express')
const router = express.Router()

// mongoose connection
require("../config/db.connection");


// INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "people index route"})
});

module.exports = router
