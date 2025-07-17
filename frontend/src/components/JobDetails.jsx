import React from "react";
import { Briefcase, MapPin, Calendar, User, ExternalLink } from "lucide-react";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { selectedJob } = useSelector((state) => state.jobReducer);
  if (!selectedJob) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 italic">
        Select a job from the list to see its details.
      </div>
    );
  }

  return (
    <div className="w-full h-[100%] p-6 bg-white overflow-y-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedJob.title}
        </h2>
        <a
          href={selectedJob.jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex underline text-blue-500 items-center justify-center gap-1"
        >
          View Posting <ExternalLink size={16} />
        </a>
      </div>

      <div className="mt-2 text-sm text-gray-500">{selectedJob.company}</div>

      <div className="mt-6 space-y-4 text-gray-700 text-sm">
        <div className="flex items-start gap-2">
          <Briefcase size={18} className="text-gray-600 mt-0.5" />
          <span className="font-semibold">Employment Type:</span>{" "}
          {selectedJob.employmentType}
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={18} className="text-gray-600 mt-0.5" />
          <span className="font-semibold">Location:</span>{" "}
          {selectedJob.location}
        </div>

        <div className="flex items-start gap-2">
          <Calendar size={18} className="text-gray-600 mt-0.5" />
          <span className="font-semibold">Posted Date:</span>{" "}
          {new Date(selectedJob.postedDateTime).toLocaleDateString()}
        </div>

        <div className="flex items-start gap-2">
          <User size={18} className="text-gray-600 mt-0.5" />
          <span className="font-semibold">Experience:</span>{" "}
          {selectedJob.minExp} - {selectedJob.maxExp} years
        </div>

        <div className="flex items-start gap-2">
          <span className="font-semibold">Source:</span> {selectedJob.source}
        </div>

        {selectedJob.description && (
          <div className="pt-4 border-t border-gray-200">
            <p className="font-semibold mb-1">Description:</p>
            <p className="text-sm text-gray-600">{selectedJob.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
