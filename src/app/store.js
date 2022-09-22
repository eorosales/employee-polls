import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questionsSlice";
import usersReducer from "../features/usersSlice";
import authedUserReducer from "../features/authedUserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
  },
});
