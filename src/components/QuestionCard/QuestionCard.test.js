import * as React from "react";
import QuestionCard from "./QuestionCard";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("QuestionCard Component", () => {
  const testQuestion = {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  };

  render(
    <Router>
      <QuestionCard question={testQuestion} />
    </Router>
  );

  it("exists in the document with correct author", () => {
    expect(screen.getByText(testQuestion.author)).toBeInTheDocument();
  });
});
