// Requires AUTHED_USER and QUESTIONS from store
import { useSelector } from "react-redux";
import { getAuthedUser } from "../../features/authedUserSlice";
import { questionsSelector } from "../../features/questionsSlice";
import { usersSelector } from "../../features/usersSlice";
import LoadingBar from "react-redux-loading-bar";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const authedUser = useSelector(getAuthedUser);
  const { questions, questionsStatus } = useSelector(questionsSelector);
  const { users, usersStatus } = useSelector(usersSelector);

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
      const usersAnsweredQuestions = Object.keys(users[authedUser].answers);
      const allQuestions = Object.keys(questions);

      return allQuestions
        .filter(
          (question) => usersAnsweredQuestions.indexOf(question) === -1 // -1 means 'no match found'
        )
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
    <div>
      <h2>Questions</h2>
      {questionsStatus !== "success" ? (
        <p>Loading Questions</p>
      ) : (
        <div>
          <h3>Answered Questions</h3>
          <ul className={styles.questionsList}>{handleAnsweredQuestions()}</ul>
          <h3>New Questions</h3>
          <ul className={styles.questionsList}>
            {handleUnansweredQuestions()}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
