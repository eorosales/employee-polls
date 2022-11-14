import styles from "./question.module.css";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";

import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";
import UnansweredQuestionForm from "../UnansweredQuestionForm/UnansweredQuestionForm";

const Question = () => {
  const { question_id } = useParams();
  const { questions } = useSelector(questionsSelector);
  const { authedUser, authenticated } = useSelector(authedUserSelector);

  // Determine if question is answered
  const isAnswered = useCallback(() => {
    if (questions[question_id] === undefined) {
      return <Navigate to='*' replace />;
    }

    const authedUserAnswers = [
      ...Object.values(questions[question_id].optionOne.votes),
      ...Object.values(questions[question_id].optionTwo.votes),
    ];
    return authedUserAnswers.includes(authedUser);
  }, [authedUser, question_id, questions]);

  useEffect(() => {
    isAnswered();
  }, [isAnswered, questions, authenticated]);

  // Display appropriate component dependent on whether it was answered or not
  if (questions[question_id] === undefined) {
    return <Navigate to='/*' replace />;
  }
  return (
    <>
      <div className={styles.question}>
        <div className={styles.question__container}>
          {isAnswered() === true ? (
            <AnsweredQuestion />
          ) : (
            <UnansweredQuestionForm question={questions[question_id]} />
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
