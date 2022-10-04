import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  questionsSelector,
  saveNewQuestion,
} from "../../slices/questionsSlice";
import { authedUserSelector } from "../../slices/authedUserSlice";
import { usersSelector, updateUserQuestions } from "../../slices/usersSlice";
import styles from "./newQuestion.module.css";

const NewQuestion = () => {
  const dispatch = useDispatch();

  const authedUser = useSelector(authedUserSelector);
  const users = useSelector(usersSelector);
  const questions = useSelector(questionsSelector);

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleOptionOne = (e) => {
    setOptionOneText(e.target.value);
  };

  const handleOptionTwo = (e) => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      optionOneText,
      optionTwoText,
      author: authedUser.authedUser,
    };

    dispatch(saveNewQuestion(question));
    dispatch(updateUserQuestions({ authedUser, questions }));

    setOptionOneText("");
    setOptionTwoText("");
  };

  return (
    <div className={styles.newQuestion}>
      <div className={styles.container}>
        <h2>Would You Rather</h2>
        <p>Create Your Own Poll</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='optionOne'>Optione One</label>
          <input type='text' onChange={handleOptionOne} />
          <label htmlFor='optionOne'>Optione Two</label>
          <input type='text' onChange={handleOptionTwo} />
          <button>Create Question</button>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
