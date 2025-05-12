import express from "express";
import {createTweet,getTweet}  from "../controllers/tweet-controller.js";
import {signUp,signIn} from "../controllers/user-controller.js"
import { toggleLike } from "../controllers/like-controller.js";
import { authenticate } from "../middlewares/authenticate.js";
const router = express.Router()

router.post('/tweet',createTweet)
router.get('/tweet/:id',getTweet)
router.post('/signUp',signUp)
router.post('/signIn',signIn)
router.post('/likes/toggle',toggleLike)

export default router;

/*
API ENDPOINTS FOR POSTMAN TESTING:

1. Sign Up
POST /api/signUp
Body (JSON):
{
  "email": "test@example.com",
  "password": "yourpassword",
  "name": "Test User"
}

2. Sign In
POST /api/signIn
Body (JSON):
{
  "email": "test@example.com",
  "password": "yourpassword"
}

3. Create Tweet
POST /api/tweet
Body (JSON):
{
  "content": "Hello Twitter!"
}

4. Get Tweet by ID
GET /api/tweet/:id

5. Toggle Like
POST /api/likes/toggle
Body (JSON):
{
  "modelId": "tweet_or_comment_id",
  "modelType": "Tweet", // or "Comment"
  "user": "user_id"
}
*/