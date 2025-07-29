// Script to import job data from a JSON file into MongoDB
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Job = require('./models/jobModel');
const rawJobs = require('./data/jobs.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log("Connected to MongoDB");

    // Clear old data
    await Job.deleteMany();

    const seenIds = new Set();
    const jobs = [];

    rawJobs.forEach((job) => {
      const jobId = parseInt(job.jobId?.$numberLong || job.jobId);
      
      if (!jobId || isNaN(jobId) || seenIds.has(jobId)) {
        console.warn("Skipping duplicate or invalid jobId:", jobId);
        return;
      }

      seenIds.add(jobId);

      jobs.push({
        jobId,
        title: job.title,
        company: job.company,
        location: job.location,
        jobLink: job.job_link,
        seniorityLevel: job.seniority_level,
        employmentType: job.employment_type,
        source: job.source,
        experience: job.experience,
        companyUrl: typeof job.company_url === 'string' ? job.company_url : '',
        companyImageUrl: typeof job.companyImageUrl === 'string' ? job.companyImageUrl : '',
        postedDateTime: new Date(job.postedDateTime?.$date),
        minExp: job.min_exp,
        maxExp: job.max_exp,
        country: job.country,
      });
    });

    await Job.insertMany(jobs);
    console.log(`Successfully imported ${jobs.length} jobs.`);
    process.exit();
  })
  .catch((error) => {
    console.error('Error importing data:', error.message);
    process.exit(1);
  });