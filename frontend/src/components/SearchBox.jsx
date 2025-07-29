import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobs, setLocationQuery } from "../redux/jobSlice";
import { X } from "lucide-react";
import useDebounce from "../hooks/useDebounce";

function SearchBox() {
  const dispatch = useDispatch();
  const { locationQuery } = useSelector((state) => state.jobReducer);
  const [location, setLocation] = useState(locationQuery);

 useDebounce(
  () => {
    const trimmed = location.trim();
    if (trimmed.length >= 3 && trimmed !== locationQuery) {
      dispatch(setLocationQuery(trimmed));
      dispatch(getJobs({ page: 1, query: trimmed }));
    }
  },
  300,
  [location]
);


  const handleClear = () => {
    setLocation("");
    dispatch(setLocationQuery(""));
    dispatch(getJobs({ page: 1, query: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      dispatch(setLocationQuery(location));
      dispatch(getJobs({ page: 1, query: location }));
    }
  };

  return (
    <div className="w-full items-center flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-[40%] flex items-center gap-2 p-4 bg-white shadow-md rounded-lg"
      >
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pr-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {location && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <button type="submit" className="btn-secondary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
