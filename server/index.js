import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectMongoDB from './config/db-config.js';
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';

dotenv.config();

connectMongoDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
 console.log(`Server listening Port! ${PORT}`)
})