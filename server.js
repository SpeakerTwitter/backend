// IMPORTS 
const express = require("express");

// CREATE APPLICATION OBJECT
const app = express();

//APP DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')

//CONTROLLER IMPORT

// INITIALIZE .ENV VARIABLES
require("dotenv").config();
require("./config/db.connection")

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

//CORS HELPER FUNCTION
app.use(cors())

app.use(morgan('dev'))


	
app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
