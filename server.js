// IMPORTS 
const express = require("express");
const app = express();

//APP DEPENDENCIES
const cors = require('cors')
const morgan = require('morgan')

// INITIALIZE .ENV VARIABLES
require("dotenv").config();
require("./config/db.connection")

const { PORT, MONGODB_URI } = process.env;

//CONTROLLER IMPORT
const twitterController = require('./controllers/twitter-controller');
const commentController = require('./controllers/comment-controller');

//MIDDLEWARE
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use('/tweets', twitterController)
app.use('/comments', commentController)

app.get("/", (req, res) => {
    res.redirect('/tweets');
});


// LISTENER
app.listen(PORT || 4000, () => console.log(`listening on PORT ${PORT}`));