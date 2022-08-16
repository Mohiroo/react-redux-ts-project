import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "../action-creators/FetchData";

interface UsersState {
  users: IUser[];
  isLoadingUsers: boolean;
  errorUsers: string;
}

const initialState: UsersState = {
  users: [
    {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
    },
  ],
  isLoadingUsers: false,
  errorUsers: "",
};

export const usersSlice = createSlice({
  name: "fetchAllUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoadingUsers = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoadingUsers = false;
      state.users = action.payload;
      state.errorUsers = "";
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingUsers = false;
      state.errorUsers = action.payload;
    },
  },
});

export default usersSlice.reducer;
