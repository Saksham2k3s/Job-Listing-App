const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobLink: {
    type: String,
    required: true
  },
  seniorityLevel: {
    type: String
  },
  employmentType: {
    type: String
  },
  source: {
    type: String
  },
  experience: {
    type: String
  },
  companyUrl: {
    type: String
  },
  companyImageUrl: {
    type: String
  },
  postedDateTime: {
    type: Date
  },
  minExp: {
    type: Number
  },
  maxExp: {
    type: Number
  },
  country: {
    type: String
  }
});

module.exports = mongoose.model('Job', JobSchema);