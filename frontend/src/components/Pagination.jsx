import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/jobSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalJobs, locationQuery } = useSelector(
    (state) => state.jobReducer
  );

  const jobsPerPage = 10;
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const handleClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      dispatch(getJobs({ page: page, query: locationQuery }));
    }
  };

  const pagesToShow = () => {
    const range = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        range.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return range;
  };

  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button
        className="btn"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pagesToShow().map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === "number" && handleClick(page)}
          className={`px-3 py-1 rounded ${
            page === currentPage ? "btn-secondary" : "btn"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="btn"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
