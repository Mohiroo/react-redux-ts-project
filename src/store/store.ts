import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PostAPI } from "../services/PostService";
import usersReducer from "./reducers/UsersSlice";
import userByIdReducer from "./reducers/UserByIdSlice";
import userPostsReducer from "./reducers/UserPostsSlice";
import AuthReducer from "./reducers/AuthSlice";

const rootReducer = combineReducers({
  usersReducer,
  userByIdReducer,
  userPostsReducer,
  AuthReducer,
  [PostAPI.reducerPath]: PostAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(PostAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
