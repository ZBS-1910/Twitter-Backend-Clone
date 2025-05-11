const { TweetRepository, HashtagRepository } = require('../repositories');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        console.log("service req data", data);
        const content = data.content;

        const tags = (content.match(/(#(?:[^\x00-\x7F]|\w)+)/g) || [])
            .map(tag => tag.substring(1).toLowerCase());

        const tweet = await this.tweetRepository.create(data);

        const alreadyPresentTags = await this.hashtagRepository.getHashtagByName(tags);
        const textOfPresentTags = alreadyPresentTags.map(tag => tag.text);
        let newTags = tags.filter(tag => !textOfPresentTags.includes(tag));

        newTags = newTags.map(tag => ({
            text: tag,
            tweets: [tweet.id]
        }));

        if (newTags.length > 0) {
            await this.hashtagRepository.bulkCreate(newTags);
        }

        await Promise.all(
            alreadyPresentTags.map((tag) => {
                tag.tweets.push(tweet.id);
                return tag.save();
            })
        );

        return tweet;
    }

    async getTweet(tweetId) {
        const tweet = await this.tweetRepository.getTweet(tweetId);
        if (!tweet) {
            throw new Error('Tweet not found');
        }
        return tweet;
    }
}

module.exports = TweetService;