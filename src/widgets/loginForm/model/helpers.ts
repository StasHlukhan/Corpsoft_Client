import { RootState } from "app/model/store";

export const selectUser = (state: RootState) => state.userReducer.user;
