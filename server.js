// IMPORTS 
const express = require("express");
const app = express();

//APP DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')

// INITIALIZE .ENV VARIABLES
require("dotenv").config();
require("./config/db.connection")

//CONTROLLER IMPORT

const { PORT, MONGODB_URI } = process.env;

//CORS HELPER FUNCTION
app.use(cors())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.send("hello world");
});

// LISTENER
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
