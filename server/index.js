import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectMongoDB from './config/db-config.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

connectMongoDB();

const app = express();

app.use(express.json());

app.use('/api/user', userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
 console.log(`Server listening Port! ${PORT}`)
})