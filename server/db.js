const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:aqAsynFRRQe8UipP@cluster0.xs3ynlq.mongodb.net/Zcoder");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  codeforcesHandle: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  githubHandle: {
    type: String,
    required: false,
    trim: true,
  },
  linkedinHandle: {
    type: String,
    required: false,
    trim: true,
  },
  solvedProblems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem',
    }
  ],

  bookmarkedProblems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Problem', 
    }
  ],

});

// problemSchema coming from the problems.js file
const problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    contestId: {
    type: Number,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
const Problem = mongoose.model('Problem', problemSchema);
module.exports = { User, Problem };
