const express = require('express');
const { GetAllJobs } = require('../controllers/jobController');
const jobRouter = express.Router();

// @route   GET /api/jobs
// @desc    Get all jobs or filter by location
// @access  Public
jobRouter.get('/', GetAllJobs)

module.exports = jobRouter;