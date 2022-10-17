import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  questionsSelector,
} from "../../slices/questionsSlice/questionsSlice";
import { usersSelector } from "../../slices/usersSlice/usersSlice";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";

import styles from "./dashboard.module.css";
import LoadingBar, { showLoading } from "react-redux-loading-bar";
import QuestionCard from "../QuestionCard/QuestionCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  // Component state
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  // State from store
  const { authedUser } = useSelector(authedUserSelector);
  const { questions, questionsStatus } = useSelector(questionsSelector);
  const { users } = useSelector(usersSelector);

  useEffect(() => {
    if (questionsStatus === "idle") {
      dispatch(fetchQuestions());
      dispatch(showLoading());
    }
    if (questionsStatus === "success") {
      handleQuestions();
    }
  }, [questionsStatus, dispatch]);

  // Set component state for answered questions and unanswered questions
  const handleQuestions = () => {
    const answered = Object.keys(users[authedUser].answers);
    const unanswered = Object.keys(questions).filter(
      (question) => answered.indexOf(question) === -1
    );

    setAnsweredQuestions(answered);
    setUnansweredQuestions(unanswered);
  };

  return (
    <div>
      {questionsStatus !== "success" ? (
        <LoadingBar updateTime={0} />
      ) : (
        <div className={styles.dashboard}>
          <h2>Answered Questions</h2>
          <ul className={styles.questionsList}>
            {answeredQuestions.map((id) => {
              return (
                <li key={id}>
                  <QuestionCard question={questions[id]} />
                </li>
              );
            })}
          </ul>
          <h2>New Questions</h2>
          <ul className={styles.questionsList}>
            {unansweredQuestions.map((id) => {
              return (
                <li key={id}>
                  <QuestionCard question={questions[id]} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
