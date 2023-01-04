const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  tweet: {type: String, required: true},
  image: String,
  user: {type: String, required: true},
},{timestamps: true});

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = Tweet
