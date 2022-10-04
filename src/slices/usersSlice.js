import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { _getUsers } from "../utils/_DATA";

const initialState = {
  users: [],
  usersStatus: "idle",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserVotes: (state, { payload }) => {
      console.log(current(state.users[payload.authedUser]));
      console.log(
        Object.assign(state.users[payload.authedUser].answers, {
          [payload.qid]: payload.authedUser,
        })
      );
    },
    updateUserQuestions: (state, { payload }) => {
      const authedUsersQuestions = Object.keys(
        payload.questions.questions
      ).filter((key) => {
        return (
          payload.questions.questions[key].author ===
          payload.authedUser.authedUser
        );
      });
      state.users[payload.authedUser.authedUser].questions =
        authedUsersQuestions;
    },
  },
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

export const { updateUserVotes, updateUserQuestions } = usersSlice.actions;

export const usersSelector = (state) => state.users;

export default usersSlice.reducer;
