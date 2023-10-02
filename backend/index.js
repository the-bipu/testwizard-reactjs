import express, { request, response } from "express";
import cors from 'cors'; // Add this import
import { PORT, URI } from "./config.js";
import mongoose from 'mongoose';
import filesRoute from './routes/filesRoute.js';
import adminRoute from './routes/adminRoute.js';
import userRoute from './routes/userRoute.js';

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
app.use('/user', userRoute);
app.use('/admin', adminRoute);

mongoose
    .connect(URI)
    .then(() => {
        console.log('App connected to database.');
        app.listen(PORT, () => {
            console.log(`App is listening to Port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
    