import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModels.js';

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, age, gender, phone, fname, lname } = req.body;

        // Check if username and email are unique
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Create a new user
        const user = new User({ username, email, password, fname, lname, age, gender, phone });

        // const token = await user.generateAuthToken();

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate authentication token
        // const token = jwt.sign({ _id: user._id.toString() }, "thisisastringthatisneededforthegeneratingtoken");
        // Save token to the user's tokens array
        // user.tokens = user.tokens.concat({ token });

        await user.save();
        res.status(200).json({ message: 'User Logged In Succesfully !!' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fetch user data by username
router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user's data (excluding sensitive information like password and tokens)
        const userData = {
            fname: user.fname,
            lname: user.lname,
            age: user.age,
            gender: user.gender,
            phone: user.phone,
            email: user.email,
            // Add other fields you want to retrieve
        };
        console.log(userData);
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
