import express from 'express';
import { User } from '../models/userModels.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';

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

        // As admin
        const adminUsername = "bipanshu";
        const adminPassword = "bipanshu123";

        if (username === adminUsername && password === adminPassword) {
            // You're logging in as an admin
            return res.status(200).json({ message: 'Login successful as Admin.', isAdmin: true });
        }

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the provided password matches the stored password
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful as User.', isAdmin: false });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/admin', (req, res) => {
    // This route will only be accessible to admins
    res.json({ message: 'Welcome to the admin dashboard!' });
});

// Route to get all users who are admins
router.get('/admins-data', async (req, res) => {
  try {
    const admins = await User.find({ isAdmin: true }); // Fetch all users where isAdmin is true

    res.status(200).json({ admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/make-admin/:username', adminMiddleware, async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const adminCount = await User.countAdmins();

    if (adminCount >= 2) {
      return res.status(400).json({ message: 'Maximum admin limit reached' });
    }

    user.isAdmin = true;
    await user.save();

    res.status(200).json({ message: 'User is now an admin' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for admin to fetch data of all users
router.get('/admin/all-users', async (req, res) => {
  try {
    const user = req.user;

    if (!user.isAdmin) {
      const requestedUserId = req.query.userId;

      if (requestedUserId !== user._id.toString()) {
        return res.status(403).json({ message: 'Access denied. Only admins can access other users\' data.' });
      }
    }

    const userData = user.isAdmin
      ? await User.find({}, { password: 0 })
      : await User.findById(user._id, { password: 0 });

    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/all-users',adminMiddleware, async (req, res) => {
  try {
    const user = req.user;
    console.log(user);

    const allUsers = await User.find({}, { password: 0 });
    res.status(200).json({ users: allUsers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
