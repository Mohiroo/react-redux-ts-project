import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../models/IPost";
import { fetchUserPosts } from "../action-creators/FetchData";

interface UserPostsState {
  userPosts: IPost[];
  isLoadingUserPosts: boolean;
  errorUserPosts: string;
}

const initialState: UserPostsState = {
  userPosts: [
    {
      id: 0,
      title: "",
      body: "",
    },
  ],
  isLoadingUserPosts: false,
  errorUserPosts: "",
};

export const userPostsSlice = createSlice({
  name: "fetchUserPosts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUserPosts.pending.type]: (state) => {
      state.isLoadingUserPosts = true;
    },
    [fetchUserPosts.fulfilled.type]: (
      state,
      action: PayloadAction<IPost[]>
    ) => {
      state.isLoadingUserPosts = false;
      state.userPosts = action.payload;
      state.errorUserPosts = "";
    },
    [fetchUserPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoadingUserPosts = false;
      state.errorUserPosts = action.payload;
    },
  },
});

export default userPostsSlice.reducer;
