import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { updateUserVotes } from "../../slices/usersSlice/usersSlice";
import {
  saveQuestionAnswer,
  updateVotes,
} from "../../slices/questionsSlice/questionsSlice";
import { avatar } from "../../utils/helper";
import styles from "./unansweredQuestionForm.module.css";

const UnansweredQuestionForm = ({ question }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { authedUser } = useSelector(authedUserSelector);
  const [selectedOption, setSelectedOption] = useState("");

  const { author, optionOne, optionTwo } = question;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      saveQuestionAnswer({
        authedUser,
        qid: id,
        answer: selectedOption,
      })
    );
    dispatch(
      updateVotes({
        authedUser,
        qid: id,
        answer: selectedOption,
      })
    );
    dispatch(
      updateUserVotes({
        authedUser,
        qid: id,
        answer: selectedOption,
      })
    );
    navigate("/");
  };

  const handleSelection = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.name);
  };

  return (
    <div className={styles.question}>
      <div className={styles.question__container}>
        <h3>Would You Rather</h3>
        <h4>Author: {author}</h4>
        {avatar(author, 100)}
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor='optionOne'>Option One</label>
            <input
              type='button'
              onClick={handleSelection}
              name='optionOne'
              value={optionOne.text}
              className={
                "optionOne" === selectedOption ? styles.selected : null
              }
            />
          </p>

          <p>
            <label htmlFor='optionTwo'>Option Two</label>
            <input
              type='button'
              onClick={handleSelection}
              name='optionTwo'
              value={optionTwo.text}
              className={
                "optionTwo" === selectedOption ? styles.selected : null
              }
            />
          </p>
          <button type='submit' disabled={!selectedOption}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UnansweredQuestionForm;
