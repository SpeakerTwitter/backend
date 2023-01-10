const mongoose = require ('mongoose')

module.exports = {
    Tweet: require('./Tweet'),
    Comment: require('./Comment')//requiring directory not route. 
	 // module.exports returns an object containing references to each of our imported models 
};

mongoose.connect( process.env.MONGODB_URI || "mongodb+srv://gabriel:gabriel@cluster0.uakbioc.mongodb.net/twitter2?retryWrites=true&w=majority" );
