const express = require('express');

// Correct path to the controller
const TweetController = require('../../controllers/tweet-controllers');

const router = express.Router();

// POST route to create a tweet
router.post('/', TweetController.createTweet);
console.log("Tweet route is working");

module.exports = router;
