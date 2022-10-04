import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";

const initialState = {
  questions: [],
  questionsStatus: "idle",
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    updateVotes: (state, { payload }) => {
      const { authedUser, qid, answer } = payload;
      state.questions[qid][answer].votes.push(authedUser);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, { payload }) => {
        state.questionsStatus = "loading";
      })
      .addCase(fetchQuestions.fulfilled, (state, { payload }) => {
        state.questionsStatus = "success";
        state.questions = payload;
      })
      .addCase(saveNewQuestion.pending, (state, _) => {
        state.questionsStatus = "loading";
      })
      .addCase(saveNewQuestion.fulfilled, (state, { payload }) => {
        state.questions = { ...state.questions, [payload.id]: payload };
        state.questionsStatus = "success";
      })
      .addCase(saveQuestionAnswer.pending, (state, { payload }) => {
        state.questionsStatus = "loading";
      })

      .addCase(saveQuestionAnswer.fulfilled, (state, { payload }) => {
        state.questionsStatus = "success";
      });
  },
});

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    try {
      const response = await _getQuestions();
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
      const response = await _saveQuestion(question);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const saveQuestionAnswer = createAsyncThunk(
  "questions/saveQuestionAnswer",
  async (answer) => {
    try {
      const response = await _saveQuestionAnswer(answer);
      return response;
    } catch (error) {
      return error.message;
    }
  }
);

export const { getQuestions, setQuestionsStatusIdle, updateVotes } =
  questionsSlice.actions;

export const questionsSelector = (state) => state.questions;

export default questionsSlice.reducer;
