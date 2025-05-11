const CrudRepository = require('./crud-repository');
const Tweet = require('../models/tweets');

class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    // Add any tweet-specific methods here
}

module.exports = TweetRepository;