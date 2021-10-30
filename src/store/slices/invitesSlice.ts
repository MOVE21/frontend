import { createSlice } from "@reduxjs/toolkit";
import { TeamInvite, UserInTeamInvite, UserInvite } from "../../types";

interface InvitesSliceInitialState {
  teamInvites: TeamInvite[];
  userInvites: UserInvite[];
  userInTeamInvites: UserInTeamInvite[];
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
