import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamInvite, UserInTeamInvite, UserInvite } from "../../types";
import { addIfNoCopies, removeItemWithId } from "../../utils";

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
  reducers: {
    addToTeamInvites(state, action: PayloadAction<TeamInvite>) {
      state.teamInvites = addIfNoCopies(state.teamInvites, action.payload);
    },
    removeFromTeamInvites(state, action: PayloadAction<TeamInvite["id"]>) {
      state.teamInvites = removeItemWithId(state.teamInvites, action.payload);
    },
    addToUserInvites(state, action: PayloadAction<UserInvite>) {
      state.userInvites = addIfNoCopies(state.userInvites, action.payload);
    },
    removeFromUserInvites(state, action: PayloadAction<UserInvite["id"]>) {
      state.userInvites = removeItemWithId(state.userInvites, action.payload);
    },
    addToUserInTeamInvites(state, action: PayloadAction<UserInTeamInvite>) {
      state.userInTeamInvites = addIfNoCopies(
        state.userInTeamInvites,
        action.payload
      );
    },
    removeFromUserInTeamInvites(
      state,
      action: PayloadAction<UserInTeamInvite["id"]>
    ) {
      state.userInTeamInvites = removeItemWithId(
        state.userInTeamInvites,
        action.payload
      );
    },
  },
});

export default invitesSlice.reducer;
