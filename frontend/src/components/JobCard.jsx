// components/JobCard.js
import { FaBolt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { onSelectJob } from "../redux/jobSlice";
const JobCard = ({ job }) => {
  const { selectedJob } = useSelector(state => state.jobReducer);
  const dispatch = useDispatch();

  const handleJobClick = (event) => {
      event.preventDefault();
      dispatch(onSelectJob({jobId : job.jobId}));
  }
  return (
    <div
      className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${
        selectedJob.jobId === job.jobId ? "border-l-4 border-pink-500 bg-purple-50" : ""
      }`}
      onClick={(e) => handleJobClick(e)}
    >
      <h3 className="font-bold text-sm text-blue-800">{job.title}</h3>
      <p className="text-sm font-semibold text-gray-700">{job.company} — <span className="text-gray-500">{job.location}</span></p>
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{job.description}</p>
      <div className="flex justify-between items-center text-sm mt-2">
        <span className="text-gray-800">${job.salary} an hour</span>
        <span className="text-pink-600 font-semibold flex items-center gap-1">
          <FaBolt className="text-pink-600" />
          Quick Apply
        </span>
      </div>
    </div>
  );
};

export default JobCard;