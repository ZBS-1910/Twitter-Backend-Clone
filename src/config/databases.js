const mongoose = require('mongoose');

const connect = async () => {
    try {
        const uri = 'mongodb://localhost:27017/twitterbd';
        
        await mongoose.connect(uri);  // No need to pass deprecated options

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};

module.exports = connect;
