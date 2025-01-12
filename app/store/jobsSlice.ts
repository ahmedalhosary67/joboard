import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Define a type for the slice state
interface JobsState {
  filter: IFilter | null;
}
interface IFilter {
  location?: string;
  type?: string[];
  salary_range?: string;
}

// Define the initial state using that type
const initialState: JobsState = {
  filter: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    handleFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    clearFilter: (state) => {
      state.filter = null;
    },
  },
});

export const { handleFilter,clearFilter } = jobsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectJobs = (state: RootState) => state.jobsSlice.filter;

export default jobsSlice.reducer;
