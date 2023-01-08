const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  name: {type: String, required: true},
  title: String,
  image: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
},{timestamps: true});

const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet