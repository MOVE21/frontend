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

export interface BaseInvite {
  status: INVITE_STATUS;
  id: string;
}

export interface TeamInvite extends BaseInvite {
  team_id: string;
}

export interface UserInvite extends BaseInvite {
  user_id: string;
}

export interface UserInTeamInvite extends BaseInvite {
  user_id: string;
}
