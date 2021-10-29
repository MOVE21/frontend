import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    addToMatches(state, action: PayloadAction<Match>) {
      const match = action.payload;
      if (state.matches.find((m) => m.id === match.id)) return;
      state.matches.push(match);
    },
    removeFromMatches(state, action: PayloadAction<Match["id"]>) {
      state.matches = state.matches.filter((m) => m.id !== action.payload);
    },
  },
});

export default matchesSlice.reducer;
