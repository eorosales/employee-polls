import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _getUsers, _saveQuestion } from "../../utils/_DATA";

const initialState = {
  users: [],
  usersStatus: "idle",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUserVotes: (state, { payload }) => {
      Object.assign(state.users[payload.authedUser].answers, {
        [payload.qid]: payload.answer,
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.usersStatus = "success";
        state.users = payload;
      })
      .addCase(saveNewQuestion.pending, (state, { payload }) => {
        state.questionsStatus = "loading";
      })
      .addCase(saveNewQuestion.fulfilled, (state, { payload }) => {
        state.users[payload.author].questions = [
          ...state.users[payload.author].questions,
          payload.id,
        ];
        state.questionsStatus = "success";
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

export const saveNewQuestion = createAsyncThunk(
  "questions/saveNewQuestion",
  async (question) => {
    try {
      const response = await _saveQuestion(question);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

// Actions
export const { updateUserVotes } = usersSlice.actions;

// Selector
export const usersSelector = (state) => state.users;

// Export reducer
export default usersSlice.reducer;
