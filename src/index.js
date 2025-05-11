const express = require('express');
const { connect, ServerConfig } = require('./config');
const apiroutes = require('./routes');
const logger = require('./config/logger-config');
const { TweetRepository } = require('./repositories');  // Changed from TweetsRepository
const tweetRepo= new TweetRepository();  // Changed from TweetsRepository
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use your API routes
app.use('/api', apiroutes);

// Start the server and connect to MongoDB
app.listen(ServerConfig.PORT, async () => {
    try {
        console.log(`Server is up and running on port ${ServerConfig.PORT}`);
        logger.info("Successfully started the server");
        await connect();  // Connect to MongoDB
        
        //->deleteById
        // // Pass the ID directly as a string
        // let tweet = await tweetRepo.deleteById({
        //     "_id":"6820352c214eff696a13e4c8"
        // });
        // console.log("Succesfully deted the tweet ");


    } catch (error) {
        console.error("Error:", error);
        logger.error("Error occurred:", error);
    }
});