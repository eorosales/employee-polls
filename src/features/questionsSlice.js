import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import * as DataAPI from "../_DATA";

const initialState = {
  questions: [],
  questionsStatus: "idle",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.questionsStatus = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, { payload }) => {
        state.questionsStatus = "success";
        state.questions = payload;
      })
      .addCase(saveNewQuestion.fulfilled, (state, { payload }) => {
        return Object.keys(state.questions)
          .map((key) => state.questions[key])
          .push(payload);
      });
  },
});

// Thunk action
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    try {
      const response = await DataAPI._getQuestions();
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const saveNewQuestion = createAsyncThunk(
  "questions/saveNewQuestion",
  async (question) => {
    try {
      const response = await DataAPI._saveQuestion(question);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const { clearQuestions } = questionsSlice.actions;

export const questionsSelector = (state) => state.questions;

export default questionsSlice.reducer;
