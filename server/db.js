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

});

const User = mongoose.model('User', userSchema);

module.exports = { User };