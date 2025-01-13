import express from 'express';
import requestTrackerMiddleware from './middlewares/requestTrackerMiddleware.js';
import connectDB from './utils/connectDB.js';

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Use the request tracker middleware to track all incoming requests
app.use(requestTrackerMiddleware);


connectDB();


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


export {requestTrackerMiddleware,connectDB};

