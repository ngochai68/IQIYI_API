// src/config/database/connect.ts
import mongoose from 'mongoose';

const dbConfig = {
  mongodb_uri: 'mongodb://127.0.0.1:27017/iQIYI_Database'
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbConfig.mongodb_uri);
    console.log('Connected to MongoDB');
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectToDatabase;
