import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to fetch jobs with pagination and optional location query
export const getJobs = createAsyncThunk(
  "jobs/get",
  async ({ page = 1, limit = 10, query = "" } = {}, thunkAPI) => {
    const state = thunkAPI.getState().jobReducer;
    
    const locationQuery = query || state.locationQuery || "";
    const cacheKey = `${locationQuery}_${page}`;

    // Return cached data if available
    if (state.jobCache?.[cacheKey]) {
      return {
        ...state.jobCache[cacheKey],
        fromCache: true,
        cacheKey,
        locationQuery,
      };
    }

    try {
      const response = await axios.get(
        `http://localhost:5000/api/jobs?page=${page}&limit=${limit}&location=${encodeURIComponent(locationQuery)}`
      );

      return {
        ...response.data,
        fromCache: false,
        cacheKey,
        locationQuery,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    selectedJob: {},
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalJobs: 0,
    limit: 10,
    locationQuery: "",
    jobCache: {},

    error: {
      isError: false,
      message: "",
      context: null,
    },
  },

  reducers: {
    resetError: (state) => {
      state.error = {
        isError: false,
        message: "",
        context: null,
      };
    },
    onSelectJob: (state, action) => {
      const { jobId } = action.payload;
      const job = state.jobs.find((job) => job.jobId === jobId);
      if (job) {
        state.selectedJob = job;
      }
    },
    setLocationQuery: (state, action) => {
      state.locationQuery = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        const { jobs, totalPages, currentPage, totalJobs, cacheKey, locationQuery } = action.payload;

        state.isLoading = false;
        state.jobs = jobs;
        state.selectedJob = jobs[0] || {};
        state.currentPage = currentPage;
        state.totalPages = totalPages;
        state.totalJobs = totalJobs;
        state.locationQuery = locationQuery;

        state.jobCache[cacheKey] = {
          jobs,
          totalPages,
          currentPage,
          totalJobs,
        };

        state.error = {
          isError: false,
          message: "",
          context: null,
        };
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = {
          isError: true,
          message: action.payload || action.error.message,
          context: null,
        };
      });
  },
});

export const { resetError, onSelectJob, setLocationQuery } = jobSlice.actions;

export default jobSlice.reducer;