import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveNewQuestion } from "../../slices/questionsSlice";
import { authedUserSelector } from "../../slices/authedUserSlice";
import styles from "./newQuestion.module.css";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authedUser = useSelector(authedUserSelector);

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
