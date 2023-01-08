const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: String,
  image: String,
},{timestamps: true});

const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet