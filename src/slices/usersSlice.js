import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getUsers } from "../utils/_DATA";

const initialState = {
  users: [],
  usersStatus: "idle",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, { payload }) => {
        state.usersStatus = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.usersStatus = "success";
        state.users = payload;
      });
  },
});

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await _getUsers();
    return response;
  } catch (error) {
    return error.message;
  }
});

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
