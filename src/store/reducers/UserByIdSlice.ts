import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUserById } from "../action-creators/FetchData";

interface UserByIdState {
  userId: IUser;
  isLoadingUserId: boolean;
  errorUserId: string;
}

const initialState: UserByIdState = {
  userId: {
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
  },
  isLoadingUserId: false,
  errorUserId: "",
};

export const userByIdSlice = createSlice({
  name: "fetchUserById",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserById.pending.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoadingUserId = true;
    },
    [fetchUserById.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.isLoadingUserId = false;
      state.userId = action.payload;
      state.errorUserId = "";
    },
    [fetchUserById.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingUserId = false;
      state.errorUserId = action.payload;
    },
  },
});

export default userByIdSlice.reducer;
