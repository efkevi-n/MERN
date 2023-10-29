import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load env variables


mongoose.connect(process.env.MONGO).then(() =>  {
    console.log('Connected to MongoDB');
 }).catch((err) => { console.log(err) });   // Connect to MongoDB
  
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});