import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "../slices/authedUserSlice/authedUserSlice";
import questionsReducer from "../slices/questionsSlice/questionsSlice";
import usersReducer from "../slices/usersSlice/usersSlice";
import { loadingBarReducer } from "react-redux-loading-bar";
export const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    users: usersReducer,
    questions: questionsReducer,
    loadingBar: loadingBarReducer,
  },
});
