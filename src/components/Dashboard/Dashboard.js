// Requires AUTHED_USER and QUESTIONS from store
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAuthedUser } from "../../features/authedUserSlice";
import Question from "../Question/Question";
import {
  fetchQuestions,
  questionsSelector,
} from "../../features/questionsSlice";
import "./dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { questions, status } = useSelector(questionsSelector);
  const [answeredQuestions, setAnsweredQuestions] = useState();
  const authedUser = useSelector(getAuthedUser);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchQuestions());
    }
  }, [status, dispatch]);

  // const handleQuestions = () => {
  //   for (const property in authedUser.answers) {
  //     let questionId = property;
  //     let answer = authedUser.answers[property];

  //     questions.forEach((question) => {
  //       const match = question.id === questionId;
  //       if (match) {
  //         console.log(question);
  //       }
  //     });
  //   }
  // };

  const questionsId = Object.values(questions).map((question) => question.id);

  return (
    <div className='dashboard'>
      <h2>Questions</h2>
      {status !== "success" ? (
        <p>Loading Questions</p>
      ) : (
        <div className='dashboard__questions'>
          {questionsId.map((question) => (
            <li key={question}>
              <Question id={question} />
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
