import express from 'express';
import { connectDB } from './config/dbConnection.js';
import errorMiddleware from "./middlewares/error.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

connectDB();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// Routes

app.get("/", (req, res) => {
    res.send("<h1>Welcome to task management api.</h1>");
});

// Error middleware
app.use(errorMiddleware);

export default app;