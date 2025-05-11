const { StatusCodes } = require("http-status-codes");
const { TweetService } = require("../services");
const {ErrorResponse,SuccessResponse}=require('../utils/common')


async function createTweet(req, res) {
    try {
        const tweet = {
            content: req.body.content,
            noOfRetweets: req.body.noOfRetweets,
            comment: req.body.comment ,
            like: req.body.like
        };
        

        console.log("req tweet", tweet);

        const response = await TweetService.create(tweet);
        SuccessResponse.data = response;
        console.log("response", response);

        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);
    }
}

    


    async function getTweet(req, res) {
        try{
        const tweetId = req.params.id;
        await TweetService.getTweet(tweetId);
        SuccessResponse.data = tweetId;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse);
        } catch(error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
    }


module.exports = {
    createTweet,
    getTweet
};
