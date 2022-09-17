// Requires AUTHED_USER and QUESTIONS from store
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchQuestions,
  questionsSelector,
} from "../../features/questionsSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { questions, status } = useSelector(questionsSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  const renderQuestions = () => {
    return questions.map((question) => {
      return (
        <div key={question.id}>
          <h1>Questions</h1>
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
        </div>
      );
    });
  };

  return <div>{renderQuestions()}</div>;
};

export default Dashboard;
