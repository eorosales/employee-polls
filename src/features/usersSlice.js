import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as DataAPI from "../_DATA";

// INITIAL STATE
const initialState = {
  users: [],
  status: "idle",
};

// USERS SLICE
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state) => state.users,
    getUsersSuccess: (state, action) => {
      console.log("test");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.users = payload;
      });
  },
});

// THUNK Action
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await DataAPI._getUsers();
    const responseValues = Object.values(response);
    return responseValues;
  } catch (error) {
    return error.message;
  }
});

// USERS SLICE Exports
export const { getUsers, getUsersSuccess } = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
