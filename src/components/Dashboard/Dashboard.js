import styles from "./dashboard.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import {
  fetchQuestions,
  questionsSelector,
} from "../../slices/questionsSlice/questionsSlice";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import { usersSelector } from "../../slices/usersSlice/usersSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unansweredQuestions, setUnansweredQuestions] = useState([]);

  const { authedUser } = useSelector(authedUserSelector);
  const { users } = useSelector(usersSelector);
  const { questions, questionsStatus } = useSelector(questionsSelector);

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
          ) : (
            <>
              <section>
                <h4>Answered Polls</h4>
                <ul>
                  {answeredQuestions.map((id) => (
                    <li key={id}>
                      <QuestionCard question={questions[id]} />
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h4>New Polls</h4>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
