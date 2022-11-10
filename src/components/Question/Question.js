import styles from "./question.module.css";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";

import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";
import UnansweredQuestionForm from "../UnansweredQuestionForm/UnansweredQuestionForm";

const Question = () => {
  const { id } = useParams();
  const { questions } = useSelector(questionsSelector);
  const { authedUser } = useSelector(authedUserSelector);

  const isAnswered = useCallback(() => {
    const authedUserAnswers = [
      ...Object.values(questions[id].optionOne.votes),
      ...Object.values(questions[id].optionTwo.votes),
    ];
    return authedUserAnswers.includes(authedUser);
  }, [authedUser, id, questions]);

  useEffect(() => {
    isAnswered();
  }, [isAnswered, questions]);

  return (
    <>
      <div className={styles.question}>
        <div className={styles.question__container}>
          {isAnswered() === true ? (
            <AnsweredQuestion />
          ) : (
            <UnansweredQuestionForm question={questions[id]} />
          )}
        </div>
      </div>
    </>
  );
};

export default Question;
