import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authedUser: "",
};

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.authedUser = payload;
    },
    logout: (state) => {
      state.authedUser = "";
    },
  },
});

// Actions
export const { login, logout } = authedUserSlice.actions;

// Selector
export const authedUserSelector = (state) => state.authedUser;

// Export reducer
export default authedUserSlice.reducer;
