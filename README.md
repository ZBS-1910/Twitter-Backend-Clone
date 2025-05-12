# Twitter Clone Backend

A Node.js backend for a Twitter-like social platform.  
This project provides core functionalities such as user authentication, tweet creation, liking, commenting, retweeting, and hashtag-based search.  
It is built with scalability and modularity in mind, leveraging MongoDB for data storage and Express.js for handling API requests.

---

## 🚀 Features

- **Tweeting:**  
  Post tweets (max 250 characters), upload images, like tweets, comment on tweets, use hashtags, and user reference.

- **Likes:**  
  Like tweets and comment tweets, with user reference.

- **Comments:**  
  Comment on tweets, like comments, user reference.

- **User Management:**  
  - Username  
  - Number of followers  
  - Email/password  
  - List of tweets  
  - Bio

- **Hashtags:**  
  - Word  
  - List of tweets  
  - Ranking

- **Other:**  
  - Retweet functionality  
  - Profile visit and follow  
  - Search by hashtags

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```sh
   git clone https://github.com/ZBS-1910/Twitter-Backend-Clone.git
   cd twitterbackend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Configure environment variables**  
   Create a `.env` file in the root:
   ```env
   PORT=3003
   ```
4. **Start MongoDB**  
   Make sure MongoDB is running.
5. **Run the server**
   ```sh
   npm start
   ```

---

## 📁 Project Structure

```
src/
  config/
  controllers/
  middlewares/
  models/
  repository/
  routes/
  services/
```

---

## 👤 Author

**Zameer Basha S**

---
