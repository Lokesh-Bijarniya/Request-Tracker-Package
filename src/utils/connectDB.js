// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB Connected');
//   } catch (err) {
//     console.error('Failed to connect to MongoDB', err.message);
//     process.exit(1); // Exit process with failure
//   }
// };

// export default connectDB;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (dbURI) => {
  try {
    const mongoURI = dbURI || process.env.MONGODB_URI || 'mongodb://localhost:27017/defaultDB'; // Use provided DB URI or fallback to env variable or local DB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

