import mongoose from 'mongoose';
import {PROD_DB_URL, DEV_DB_URL,NODE_ENV } from './serverConfig.js';

async function connectDB() {
    try {
        if (NODE_ENV === "production") {
            await mongoose.connect(PROD_DB_URL);
        } else if (NODE_ENV === "development") {
            await mongoose.connect(DEV_DB_URL);
        }
        console.log(`Connected to mongodb database from ${NODE_ENV} environment`);
    }
    catch {
        console.log('Error connecting to database');
    }
} 

export default connectDB;
