import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("_Data test", () => {
  describe("_saveQuestion", () => {
    test("returns the saved question and all expected fields are populated when correctly formatted data is passed", async () => {
      const actual = await _saveQuestion({
        optionOneText: "optionOne",
        optionTwoText: "optionTwo",
        author: "testauthor",
      });
      expect(actual).toEqual({
        author: "testauthor",
        id: actual.id,
        optionOne: {
          text: "optionOne",
          votes: [],
        },
        optionTwo: {
          text: "optionTwo",
          votes: [],
        },
        timestamp: actual.timestamp,
      });
    });

    test("returns an error if incorrect data is passed to the function", async () => {
      expect.assertions(1);
      await expect(
        _saveQuestion({
          optionOneText: "",
          optionTwoText: "",
          author: "",
        })
      ).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });

  describe("_saveQuestionAnswer", () => {
    test("true is returned when correctly formatted data is passed", async () => {
      const actual = await _saveQuestionAnswer({
        authedUser: "mtsamis",
        qid: "8xf0y6ziyjabvozdd253nd",
        answer: "optionTwo",
      });
      expect(actual).toBeTruthy();
    });
    test("returns an error if incorrect data is passed to the function", async () => {
      expect.assertions(1);
      await expect(
        _saveQuestionAnswer({
          authedUser: "",
          qid: "",
          answer: "",
        })
      ).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
  });
});
