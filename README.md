TWITTER CLONE BACKEND

// user should be able to post a tweet
```
    <Tweet>
        --content (250 characters MAX)
        --image upload
        --likes
        --comment tweets
        --hashtags(start with #)
```


// user 
```
    <User>
        --user name
        --noOfFollers
        --email/password
        --List of tweets
        --bio
```


//Hashtags
```
    <Hashtag>
        --word
        --list of tweets
        --ranking
        --searching hashtag
        
```


// other user should be able to like ,
    


// other users could able to tweet to a tweet

// other users should be able to retweet

// user should able to see this profile

//tag other others

// delete tweet,
// user should able to visit a profile or author and  follow

// hashtags searching


## Features

### User Features
- Users can create an account with a username, email, and password.
- Users can update their profile with a bio and view their own profile.
- Users can follow or unfollow other users.
- Users can view other users' profiles and their list of tweets.

### Tweet Features
- Users can post tweets with a maximum of 250 characters.
- Tweets can include images, hashtags, and mentions of other users.
- Users can delete their own tweets.
- Users can like tweets, comment on tweets, and retweet other users' tweets.

### Hashtag Features
- Hashtags can be added to tweets and start with `#`.
- Users can search for tweets by hashtags.
- Hashtags are ranked based on their popularity.

### Additional Features
- Users can tag other users in tweets.
- Users can view a list of their followers and the people they are following.
- Users can explore trending hashtags and tweets.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ZBS-1910/Twitter-Backend-Clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd twitter-clone-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables in a `.env` file:
    ```env
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```
5. Run database migrations:
    ```bash
    npx prisma migrate dev
    ```
6. Start the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

### User Endpoints
- `POST /api/users/register` - Register a new user.
- `POST /api/users/login` - Log in a user.
- `GET /api/users/:id` - Get user profile by ID.
- `POST /api/users/follow/:id` - Follow a user.
- `POST /api/users/unfollow/:id` - Unfollow a user.

### Tweet Endpoints
- `POST /api/tweets` - Create a new tweet.
- `GET /api/tweets/:id` - Get a tweet by ID.
- `DELETE /api/tweets/:id` - Delete a tweet.
- `POST /api/tweets/:id/like` - Like a tweet.
- `POST /api/tweets/:id/comment` - Comment on a tweet.
- `POST /api/tweets/:id/retweet` - Retweet a tweet.

### Hashtag Endpoints
- `GET /api/hashtags/:tag` - Search for tweets by hashtag.
- `GET /api/hashtags/trending` - Get trending hashtags.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Database for storing user and tweet data.
- **JWT**: Authentication and authorization.
- **Multer**: Middleware for handling image uploads.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.