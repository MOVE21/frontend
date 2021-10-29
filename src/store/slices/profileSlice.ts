import { createSlice } from "@reduxjs/toolkit";

interface ProfileSliceInitialState {
  profile?: any;
}

const initialState: ProfileSliceInitialState = {
  profile: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
