export interface Match {
  name: string;
  time: string;
  my_team_id: string;
  rival_team_id: string;
  is_completed: boolean;
  score: string;
  id: string;
}

export interface Profile {
  name: string;
  surname: string;
  midname: string;
  photo: string;
  descr: boolean;
  id: string;
}

export enum INVITE_STATUS {
  NOT_VIEWED = "NOT_VIEWED",
  REJECTED = "REJECTED",
  ACCEPTED = "ACCEPTED",
}

export interface TeamInvite {
  status: INVITE_STATUS;
  team_id: string;
  id: string;
}

export interface UserInvite {
  status: INVITE_STATUS;
  user_id: string;
  id: string;
}

export interface UserInTeamInvite {
  status: INVITE_STATUS;
  user_id: string;
  id: string;
}
