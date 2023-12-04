import express from 'express';
import { User } from '../models/userModels.js';

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if username and email are unique
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Create a new user
        const user = new User({ username, email, password });

        const token = await user.generateAuthToken();

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
            return res.status(404).json({ message: 'User not found' });
        } else {
            // Check if the entered password matches the stored hashed password
            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid password' });
            } else {
                // Generate and retrieve the authentication token
                const token = await user.generateAuthToken();
                
                // Return success response with token
                res.status(200).json({ message: 'Login successful as User.', isAdmin: user.isAdmin, token });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
