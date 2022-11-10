import { configureStore } from "@reduxjs/toolkit";
import authedUserReducer from "../slices/authedUserSlice/authedUserSlice";
import questionsReducer from "../slices/questionsSlice/questionsSlice";
import usersReducer from "../slices/usersSlice/usersSlice";

export const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    questions: questionsReducer,
    users: usersReducer,
  },
});
