const Job = require("../models/jobModel");

const GetAllJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    
    // Get location from query
    const location = req.query.location;

    const filter = {};
    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(filter).skip(skip).limit(limit);
    const totalJobs = await Job.countDocuments(filter);

    return res.status(200).json({
      jobs,
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),
      totalJobs,
    });
  } catch (error) {
    console.log("Error while fetching jobs", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { GetAllJobs };