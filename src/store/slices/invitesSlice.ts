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
      const invite = action.payload;
      if (hasItemWithTheSameId(state.userInvites, invite)) return;
      state.userInvites.push(invite);
    },
    removeFromUserInvites(state, action: PayloadAction<UserInvite["id"]>) {
      state.userInvites = state.userInvites.filter(
        (i) => i.id !== action.payload
      );
    },
    addToUserInTeamInvites(state, action: PayloadAction<UserInTeamInvite>) {
      const invite = action.payload;
      if (hasItemWithTheSameId(state.userInTeamInvites, invite)) return;
      state.userInTeamInvites.push(invite);
    },
    removeFromUserInTeamInvites(
      state,
      action: PayloadAction<UserInTeamInvite["id"]>
    ) {
      state.userInTeamInvites = state.userInTeamInvites.filter(
        (i) => i.id !== action.payload
      );
    },
  },
});

export default invitesSlice.reducer;
