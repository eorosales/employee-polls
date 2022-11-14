import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authedUser: "",
  authenticated: false,
};

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.authenticated = true;
      state.authedUser = payload;
    },
    logout: (state) => {
      state.authenticated = false;
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
