import express from 'express';
import { connect } from './config/database.js';
import Tweet from './models/tweet.js';
import Hashtag from './models/hashtags.js';

import TweetsRepository from '../repository/tweet-repository.js';

const app = express();
const tweetRepo = new TweetsRepository();

app.listen(3002, async () => {
    console.log('Server is Up....');
    // Establish MongoDB connection
    await connect();
    console.log('Mongoose is connected');

    // Create instance of repository
    // const tweets = await tweetRepo.create({
    //   content: 'Learning Express with MongoDB!',
    //   like: 0,
    //   noOfRetweets: 0,
    //   comment: 'This is my first tweet from the repository.'
    // });
    // console.log("tweets",tweets)

  //   let gettweets=await tweetRepo.getAll();
  // console.log(gettweets)
  //const id = '681862e2e911f1ff5e725980';
  // const tweetId = '681862e2e911f1ff5e725980';

  // const deletebyid= await tweetRepo.deleteById(tweetId);
  // console.log(deletebyid,"deleted");


  
});
