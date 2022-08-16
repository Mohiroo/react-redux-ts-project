import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";

export const fetchUsers = createAsyncThunk(
  "fetchAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchUserById = createAsyncThunk(
  "fetchUserById",
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + userId
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

export const fetchUserPosts = createAsyncThunk(
  "fetchUserPosts",
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + userId + "/posts"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
