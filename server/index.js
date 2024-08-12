import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import connectMongoDB from './config/db-config.js';

dotenv.config();

connectMongoDB();

const app = express();

const PORT = 4000;

app.listen(PORT, () => {
 console.log(`Server listening Port! ${PORT}`)
})