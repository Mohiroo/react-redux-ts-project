import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
