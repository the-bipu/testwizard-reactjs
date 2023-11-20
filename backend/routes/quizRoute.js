import express from 'express';
import { Quiz } from '../models/quizModels.js'; // Assuming your model is in a 'models' folder

const router = express.Router();

// Route to insert quiz data into the database
router.post('/add', async (req, res) => {
  try {
    const { quiz_id, username, subject, marks } = req.body;

    // Create a new quiz object based on the Quiz model
    const newQuiz = new Quiz({
      quiz_id,
      username,
      subject,
      marks
    });

    // Save the new quiz to the database
    await newQuiz.save();

    res.status(201).json({ message: 'Quiz data inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch quiz data by username
router.get('/get/:username', async (req, res) => {
  try {
    const username = req.params.username;

    // Find quizzes by username in the database
    const quizzes = await Quiz.find({ username });

    if (quizzes.length === 0) {
      return res.status(404).json({ message: 'No quizzes found for this username' });
    }

    res.status(200).json({ quizzes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:quizId', async (req, res) => {
  try {
    const quizId = req.params.quizId;

    // Find the quiz by its ID and delete it from the database
    const deletedQuiz = await Quiz.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      return res.status(404).json({ message: 'Quiz not found or already deleted' });
    }

    res.status(200).json({ message: 'Quiz deleted successfully', deletedQuiz });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
