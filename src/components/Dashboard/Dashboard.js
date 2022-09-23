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
import { getUsers, usersSelector } from "../../features/usersSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);
  const { questions, status } = useSelector(questionsSelector);
  const { users, usersStatus } = useSelector(usersSelector);

  const handleAnswers = () => {
    if (usersStatus === "success") {
      return Object.keys(users).map((user) => {
        return (
          user === authedUser &&
          Object.keys(users[user].answers).map((answerId) => {
            return (
              <li key={answerId}>
                <Question question={questions[answerId]} />
              </li>
            );
          })
        );
      });
    }
  };

  handleAnswers();

  return (
    <div className='dashboard'>
      <h2>Questions</h2>
      {status !== "success" ? (
        <p>Loading Questions</p>
      ) : (
        <div className='dashboard__questions'>
          <h3>Done</h3>
          <ul>{handleAnswers()}</ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
