
 class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      console.error('Create Error:', error);
      throw error;
    }
  }

  async deleteById(id) {
    try {
      const result = await this.model.findByIdAndDelete(id);  // Delete tweet by ID
      return result;  // Return the result of the deletion (deleted tweet or null)
    } catch (error) {
      console.error('Error deleting tweet by ID:', error);
      throw error;
    }
  }

  async getAll() {
    try {
      return await this.model.find();
    } catch (error) {
      console.error('GetAll Error:', error);
      throw error;
    }
  

  }

  async getById(id){
    try{
        let tweet= await this.model.findById(id);
        return tweet;

    }catch(error){
        console.log(error);
        throw error;
    }
}
}

module.exports = CrudRepository;