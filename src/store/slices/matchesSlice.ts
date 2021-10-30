import { createSlice } from "@reduxjs/toolkit";
import { Match } from "../../types";

interface MatchesSliceInitialState {
  matches: Match[];
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
