import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as DataAPI from "../_DATA";

const initialState = {
  questions: [],
  status: "idle",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state) => state.questions,
    getQuestionsSuccess: (state, action) => {
      console.log("test");
    },
    addQuestion: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.questions = payload;
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

export const { getQuestions, getQuestionsSuccess, addQuestion } =
  questionsSlice.actions;

export const questionsSelector = (state) => state.questions;

export default questionsSlice.reducer;
