import { createSlice } from "@reduxjs/toolkit";

interface MatchesSliceInitialState {
  matches: any[];
}

const initialState: MatchesSliceInitialState = {
  matches: [],
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {},
});

export default matchesSlice.reducer;
