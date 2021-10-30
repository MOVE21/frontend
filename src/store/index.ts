import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import invitesReducer from "./slices/invitesSlice";
import matchesReducer from "./slices/matchesSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    matches: matchesReducer,
    invites: invitesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
