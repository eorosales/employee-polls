import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authedUser: "",
};

const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    setAuthedUser: (state, { payload }) => {
      state.authedUser = payload;
    },
    logoutUser: (state) => {
      state.authedUser = "";
    },
  },
});

export const { setAuthedUser, logoutUser } = authedUserSlice.actions;

export const getAuthedUser = (state) => state.authedUser.authedUser;

export default authedUserSlice.reducer;
