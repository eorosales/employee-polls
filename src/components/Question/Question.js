import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import {
  questionsSelector,
  saveQuestionAnswer,
  updateVotes,
} from "../../slices/questionsSlice/questionsSlice";
import { updateUserVotes } from "../../slices/usersSlice/usersSlice";
import styles from "./question.module.css";

const Question = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { questions, questionsStatus } = useSelector(questionsSelector);
  const { authedUser } = useSelector(authedUserSelector);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelection = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      saveQuestionAnswer({ authedUser, qid: id, answer: selectedOption })
    );
    dispatch(updateVotes({ authedUser, qid: id, answer: selectedOption }));
    dispatch(updateUserVotes({ authedUser, qid: id, answer: selectedOption }));
  };

  const handleQuestion = () => {
    if (questionsStatus === "success") {
      const { author, timestamp, optionOne, optionTwo } = questions[id];
      return (
        <div className={styles.question}>
          <h2>Answer Question</h2>
          <p>Author: {author}</p>
          <form className={styles.options} onSubmit={handleSubmit}>
            <button
              onClick={handleSelection}
              name='optionOne'
              data-testid='option-one'>
              {optionOne.text}
            </button>
            <button
              onClick={handleSelection}
              name='optionTwo'
              data-testid='optioneTwo'>
              {optionTwo.text}
            </button>
            <button>Submit</button>
          </form>
        </div>
      );
    }
  };

  return <div>{handleQuestion()}</div>;
};

export default Question;
