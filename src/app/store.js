import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "../features/questionsSlice";
import usersReducer from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    questions: questionsReducer,
  },
});
