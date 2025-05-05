import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({

    content:{
        type:String,
    },
    comment:{
        type:String,

    },
    like:{
        type:Number,

    },
    noOfRetweets:{
        type:Number,
    }

});
const Tweet =mongoose.model('Tweet',tweetSchema);

export default Tweet;