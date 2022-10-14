import questionsReducer, {
  updateVotes,
  fetchQuestions,
  saveNewQuestion,
  saveQuestionAnswer,
} from "./questionsSlice.js";

describe("Questions Slice", () => {
  const initialState = {
    questions: [],
    questionsStatus: "idle",
  };

  it("handles initial questions", () => {
    const actual = questionsReducer(undefined, { type: "unknown" });
    expect(actual).toEqual({ questions: [], questionsStatus: "idle" });
  });

  describe("fetchQuestions async thunk middleware", () => {
    it("sets questionsStatus to 'loading' when fetchQuestions is pending", () => {
      const actual = questionsReducer(initialState, {
        type: fetchQuestions.pending.type,
      });
      expect(actual).toEqual({ questions: [], questionsStatus: "loading" });
    });

    it("sets questionsStatus to 'success' when fetchQuestions is fulfilled", () => {
      const actual = questionsReducer(initialState, {
        type: fetchQuestions.fulfilled.type,
        payload: { questions: { qid: 1, question: "testquestion" } },
      });
      expect(actual).toEqual({
        questions: { questions: { qid: 1, question: "testquestion" } },
        questionsStatus: "success",
      });
    });
  });

  describe("saveNewQuestion async thunk middleware", () => {
    it("sets questionsStatus to 'loading' when saveNewQuestion is pending", () => {
      const actual = questionsReducer(initialState, {
        type: saveNewQuestion.pending.type,
      });
      expect(actual).toEqual({ questions: [], questionsStatus: "loading" });
    });
    it("sets questionsStatus to 'success' and adds a new question to questions", () => {
      const questions = {
        qid001: {
          id: "qid001",
          author: "testuser001",
        },
      };
      const actual = questionsReducer(
        { questions, questionsStatus: "idle" },
        {
          type: saveNewQuestion.fulfilled.type,
          payload: { id: "qid003", author: "testuser003" },
        }
      );
      expect(actual).toEqual({
        questions: {
          qid001: {
            id: "qid001",
            author: "testuser001",
          },
          qid003: {
            id: "qid003",
            author: "testuser003",
          },
        },
        questionsStatus: "success",
      });
    });
  });

  describe("saveQuestionAnswer", () => {
    it("set questionsStatus to 'loading' when saveQuestionAnswer is pending", () => {
      const actual = questionsReducer(initialState, {
        type: saveQuestionAnswer.pending.type,
      });
      expect(actual).toEqual({ questions: [], questionsStatus: "loading" });
    });
  });
});
