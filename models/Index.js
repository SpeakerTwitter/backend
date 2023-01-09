module.exports = {
    Tweet: require('./Tweet'),
    Comment: require('./Comment')//requiring directory not route. 
	 // module.exports returns an object containing references to each of our imported models 
};

mongoose.connect( process.env.MONGODB_URI || "http://localhost:4000/tweets" );
