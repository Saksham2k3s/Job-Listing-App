import { useEffect } from "react";
import "./App.css";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./redux/jobSlice";

function App() {
  const dispatch = useDispatch();
  const { jobs, isLoading } = useSelector((state) => state.jobReducer);

  // Fetch jobs
  useEffect(() => {
    dispatch(getJobs({ page: 1, limit: 10 }));
  }, [dispatch]);
  return (
    <div>
      {jobs && (
        <div className="flex font-sans">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <>
              <JobList />
              <JobDetails />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
