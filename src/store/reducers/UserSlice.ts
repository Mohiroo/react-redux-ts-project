import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "../action-creators/FetchUsers";

interface UserState {
  users: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: {
    id: 0,
    name: "",
    email: "",
  },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.pending.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
