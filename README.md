# Twitter Clone API

A basic Twitter clone backend API built with Node.js, Express, and MongoDB.

## Features

- Create and manage tweets
- Hashtag support and tracking
- Like and retweet functionality
- Comments on tweets
- API versioning (v1 and v2)
- Winston logging system

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Winston (for logging)
- HTTP Status Codes

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middlewares/    # Express middlewares
├── models/         # Mongoose models
├── repositories/   # Data access layer
├── routes/         # API routes
├── services/       # Business logic
└── utils/         # Utility functions
```

## Getting Started

1. Clone the repository:
    ```bash
    git clone "https://github.com/ZBS-1910/Twitter-Backend-Clone.git"
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory:
    ```env
    PORT=3000
    ```

4. Start MongoDB locally:
    ```bash
    mongod
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

### V1 Routes
- `GET /api/v1/info` - Get API information
- `POST /api/v1/tweets` - Create a new tweet

### V2 Routes
- `GET /api/v2/info` - Get V2 API information

## Models

### Tweet Schema
- content (String, required)
- comment (String)
- like (Number, default: 0)
- noOfRetweets (Number, default: 0)
- timestamps (created and updated)

### Hashtag Schema
- text (String, required, unique)
- tweets (Array of Tweet IDs)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Author

- **Name**: Zameer Basha S
- **GitHub**: https://github.com/ZBS-1910

