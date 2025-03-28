const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    console.log('MongoDB URI:', process.env.MONGO_URI); // Log the MongoDB URI for debugging
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed', error);
    process.exit(1);
  }
};
module.exports = connectDB;
