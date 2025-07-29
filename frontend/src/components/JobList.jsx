// components/JobList.js
import React from "react";
import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const JobList = () => {
  const { jobs } = useSelector((state) => state.jobReducer);
  return (
    <div className=" container w-1/2 h-screen overflow-y-scroll border-r bg-white pb-8 ">
      {jobs && jobs.map((job) => <JobCard key={job.jobId} job={job} />)}
      <Pagination />
    </div>
  );
};

export default JobList;
