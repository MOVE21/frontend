import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match } from "../../types";
import { addIfNoCopies, removeItemWithId } from "../../utils";

interface MatchesSliceInitialState {
  matches: Match[];
}

const initialState: MatchesSliceInitialState = {
  matches: [],
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    addToMatches(state, action: PayloadAction<Match>) {
      state.matches = addIfNoCopies(state.matches, action.payload);
    },
    removeFromMatches(state, action: PayloadAction<Match["id"]>) {
      state.matches = removeItemWithId(state.matches, action.payload);
    },
  },
});

export default matchesSlice.reducer;
