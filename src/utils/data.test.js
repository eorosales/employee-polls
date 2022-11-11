import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("DATA functions", () => {
  describe("_saveQuestion", () => {
    const question = {
      optionOneText: "Option One",
      optionTwoText: "Option Two",
      author: "testauthor",
    };

    it("returns saved formatted question with correctly populated fields", async () => {
      const actual = await _saveQuestion(question);
      expect(actual).toEqual({
        id: actual.id,
        timestamp: actual.timestamp,
        author: "testauthor",
        optionOne: {
          votes: [],
          text: "Option One",
        },
        optionTwo: {
          votes: [],
          text: "Option Two",
        },
      });
    });

    it("returns an error if incorrect data is passed to the function", async () => {
      const actual = _saveQuestion({
        optionOneText: "",
        optionTwoText: "",
        author: "",
      });
      await expect(actual).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });

  describe("_saveQuestionAnswer", () => {
    const data = {
      authedUser: "tylermcginnis",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionOne",
    };
    it("returns true when correctly formatted data is passed to the function", async () => {
      const actual = await _saveQuestionAnswer(data);
      expect(actual).toBeTruthy();
    });
    it("returns an error if incorrect data is passed to the function", async () => {
      const actual = _saveQuestionAnswer({
        authedUser: "",
        qid: "",
        answer: "",
      });
      await expect(actual).rejects.toEqual(
        "Please provide authedUser, qid, and answer"
      );
    });
  });
});
