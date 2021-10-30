import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

export default profileSlice.reducer;
