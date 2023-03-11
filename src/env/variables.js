import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;

export const MONGO_URI = process.env.MONGO_URI;

export const CLOUD_NAME = process.env.CLOUD_NAME;

export const API_KEY = process.env.API_KEY;

export const API_SECRECT = process.env.API_SECRECT;
