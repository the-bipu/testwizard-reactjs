import mongoose from 'mongoose';

// Define a quiz schema
const quizSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  time: {
    type: Number,
    default: () => Math.floor(Date.now() / 1000)
  },
  marks: {
    type: Number,
    required: true
  }
});

export const Quiz = mongoose.model('Quiz', quizSchema);

