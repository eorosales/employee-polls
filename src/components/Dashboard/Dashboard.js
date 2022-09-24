// Requires AUTHED_USER and QUESTIONS from store
import { useSelector, useDispatch } from "react-redux";
import { getAuthedUser } from "../../features/authedUserSlice";
import { questionsSelector } from "../../features/questionsSlice";
import { usersSelector } from "../../features/usersSlice";
import LoadingBar, { showLoading, hideLoading } from "react-redux-loading-bar";
import Layout from "../Layout/Layout";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./dashboard.module.css";
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);
  const { questions, questionsStatus } = useSelector(questionsSelector);
  const { users, usersStatus } = useSelector(usersSelector);

  useEffect(() => {
    if (questionsStatus !== "success") {
      dispatch(showLoading());
    }
  });

  const handleAnsweredQuestions = () => {
    if (usersStatus === "success") {
      return Object.keys(users).map((user) => {
        return (
          user === authedUser &&
          Object.keys(users[user].answers).map((answerId) => {
            return (
              <li key={answerId}>
                <QuestionCard question={questions[answerId]} />
              </li>
            );
          })
        );
      });
    }
  };

  const handleUnansweredQuestions = () => {
    if (usersStatus === "success" && questionsStatus === "success") {
      return Object.keys(questions)
        .filter((question) => {
          const usersAnsweredQuestions = Object.keys(users[authedUser].answers);
          return usersAnsweredQuestions.indexOf(question) === -1; // -1 means 'no match found'
        })
        .map((unanswered) => {
          return (
            <li key={unanswered}>
              <QuestionCard question={questions[unanswered]} />
            </li>
          );
        });
    }
  };

  return (
    <Layout>
      {questionsStatus !== "success" && usersStatus !== "success" ? (
        <LoadingBar />
      ) : (
        <div className={styles.dashboard}>
          <h2>Questions</h2>
          <h3>Answered Questions</h3>
          <ul className={styles.questionsList}>{handleAnsweredQuestions()}</ul>
          <h3>New Questions</h3>
          <ul className={styles.questionsList}>
            {handleUnansweredQuestions()}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
