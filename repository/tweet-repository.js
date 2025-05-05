import Tweet from "../src/models/tweet.js";
import { CrudRepository } from "./crud-repository.js";

class TweetsRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getById(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet; 
    } catch (error) {
      console.error('Get Error by PK (Primary Key):', error);
      throw error;
    }
  }
}

export default TweetsRepository;
