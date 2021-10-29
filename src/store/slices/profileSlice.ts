import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../types";

interface ProfileSliceInitialState {
  profile?: Profile;
}

const initialState: ProfileSliceInitialState = {
  profile: undefined,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.profile = action.payload;
    },
  },
});

export default profileSlice.reducer;
