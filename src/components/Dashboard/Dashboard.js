import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { usersSelector } from "../../slices/usersSlice/usersSlice";
import {
  fetchQuestions,
  questionsSelector,
} from "../../slices/questionsSlice/questionsSlice";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { authedUser } = useSelector(authedUserSelector);
  const { users } = useSelector(usersSelector);
  const { questions, questionsStatus } = useSelector(questionsSelector);

  // Fetch all questions from store and display when successful
  useEffect(() => {
    if (questionsStatus === "idle" || questionsStatus === "loading") {
      dispatch(fetchQuestions());
    }
    if (questionsStatus === "success") {
      const answered = Object.keys(users[authedUser].answers).sort((a, b) => {
        return questions[b].timestamp - questions[a].timestamp;
      });
      const unanswered = Object.keys(questions)
        .filter((question) => answered.indexOf(question) === -1)
        .sort((a, b) => {
          return questions[b].timestamp - questions[a].timestamp;
        });

      setAnsweredQuestions(answered);
      setUnansweredQuestions(unanswered);
    }
  }, [dispatch, questionsStatus, questions, authedUser, users]);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboard__container}>
          <h3>Dashboard</h3>
          {questionsStatus !== "success" ? (
            <p>Loading</p>
          ) : toggle === true ? (
            <section>
              <div className={styles.section__header}>
                <h4>Answered Polls</h4>
                <button onClick={() => setToggle(!toggle)}>Toggle Polls</button>
              </div>
              <ul>
                {answeredQuestions.map((id) => (
                  <li key={id}>
                    <QuestionCard question={questions[id]} />
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section>
              <div className={styles.section__header}>
                <h4>New Polls</h4>
                <button onClick={() => setToggle(!toggle)}>Toggle Polls</button>
              </div>
              <ul>
                {unansweredQuestions.length === 0 ? (
                  <p>You have no new questions to answer.</p>
                ) : (
                  unansweredQuestions.map((id) => (
                    <li key={id}>
                      <QuestionCard question={questions[id]} />
                    </li>
                  ))
                )}
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
