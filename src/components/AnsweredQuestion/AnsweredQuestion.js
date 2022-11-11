import styles from "./answeredQuestion.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { usersSelector } from "../../slices/usersSlice/usersSlice";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";

const AnsweredQuestion = () => {
  const { id } = useParams();
  const { questions } = useSelector(questionsSelector);
  const { authedUser } = useSelector(authedUserSelector);
  const { users } = useSelector(usersSelector);

  return (
    <>
      <h3>Poll Created by {questions[id].author}</h3>
      <h4>You Said You Would Rather...</h4>
      <div className={styles.answeredQuestion__container}>
        <div
          className={
            questions[id].optionOne.votes.includes(authedUser)
              ? styles.optionInfo__selected
              : styles.optionInfo
          }>
          <h5>Option One</h5>
          <p>{questions[id].optionOne.text}</p>
          <p>{`${questions[id].optionOne.votes.length} Total Vote(s)`}</p>
          {questions[id].optionOne.votes.includes(authedUser)}
          <span className={styles.answeredQuestion__details}>
            {`${
              (questions[id].optionOne.votes.length /
                Object.keys(users).length) *
              100
            }% of users voted for option one.`}
          </span>
        </div>
        <div
          className={
            questions[id].optionTwo.votes.includes(authedUser)
              ? styles.optionInfo__selected
              : styles.optionInfo
          }>
          <h5>Option Two</h5>
          <p>{questions[id].optionTwo.text}</p>
          <p>{`${questions[id].optionTwo.votes.length} Total Vote(s)`}</p>
          {questions[id].optionTwo.votes.includes(authedUser)}
          <span className={styles.answeredQuestion__details}>
            {`${
              (questions[id].optionTwo.votes.length /
                Object.keys(users).length) *
              100
            }% of users voted for option two.`}
          </span>
        </div>
      </div>
    </>
  );
};

export default AnsweredQuestion;
