const Hashtag =require('../models');
const CrudRepository = require('./crud-repository');

class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtag);
  }
  async bulkCrete(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getHashtagByName(text) {
    try {
      const tag = await Hashtag.find({
        text: text,
      });
      return tag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
}

module.exports=HashtagRepository;
