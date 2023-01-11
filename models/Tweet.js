const mongoose = require("mongoose");
const Comment = require('./Comment')

const TweetSchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: {type: String, required: true},
  image: String,
  comments: [Comment.schema]
},{timestamps: true});

const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet