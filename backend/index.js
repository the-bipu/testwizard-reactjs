import express from "express";
import cors from 'cors'; // Add this import
// import jwt from 'jsonwebtoken';
import { PORT, URI } from "./config.js";
import mongoose from 'mongoose';
import filesRoute from './routes/filesRoute.js';
import userRoute from './routes/userRoute.js';
import quizRoute from './routes/quizRoute.js';

const app = express();

// Middleware for handling cors origin
// Method 1: allow all origins with default of cors(*)
app.use(cors());

app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to the Main Page');
});


app.use('/files', filesRoute);
app.use('/users', userRoute);
app.use('/quiz', quizRoute);

mongoose
    .connect(URI)
    .then(() => {
        console.log('App connected to database.');
        app.listen(process.env.PORT || 5555, () => {
            console.log(`App is listening to Port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    