import express from 'express';
import multer from 'multer';
import path from 'path';
import { File } from '../models/fileModels.js';

const router = express.Router();

// Set up multer to handle file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Save uploaded files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Rename files to prevent overwriting
    }
});

const upload = multer({ storage });

// Route for posting files to the db
router.post('/', upload.single('file'), async (request, response) => {
    try {
        if (!request.file) {
            return response.status(400).send({
                message: 'Please upload a file'
            });
        }

        const newFile = {
            filename: request.file.originalname,
            path: request.file.path,
            mimeType: request.file.mimetype,
            size: request.file.size
        };
        
        const file = await File.create(newFile);

        return response.status(201).send(file);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for fetching all files from the db
router.get('/', async (request, response) => {
    try {
        const files = await File.find();
        return response.status(200).send(files);
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ message: 'Internal Server Error' });
    }
});

export default router;
