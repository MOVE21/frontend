import { createSlice } from "@reduxjs/toolkit";

interface InvitesSliceInitialState {
  teamInvites: any[];
  userInvites: any[];
  userInTeamInvites: any[];
}

const initialState: InvitesSliceInitialState = {
  teamInvites: [],
  userInvites: [],
  userInTeamInvites: [],
};

const invitesSlice = createSlice({
  name: "invites",
  initialState,
  reducers: {},
});

export default invitesSlice.reducer;
