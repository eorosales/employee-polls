import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";
import { saveNewQuestion } from "../../slices/usersSlice/usersSlice";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
// import { updateUserQuestions } from "../../slices/usersSlice/usersSlice";
import styles from "./newQuestion.module.css";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authedUser } = useSelector(authedUserSelector);
  const { questions } = useSelector(questionsSelector);

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
      author: authedUser,
    };

    dispatch(saveNewQuestion(question));
    // dispatch(updateUserQuestions({ authedUser, questions }));

    navigate("/");
  };

  return (
    <div className={styles.newQuestion}>
      <div className={styles.container}>
        <h3>Would You Rather</h3>
        <h4>Create Your Own Poll</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='optionOne'>Option One</label>
          <input
            type='text'
            value={optionOneText}
            onChange={handleOptionOne}
            required
          />
          <label htmlFor='optionOne'>Option Two</label>
          <input
            type='text'
            value={optionTwoText}
            onChange={handleOptionTwo}
            required
          />
          <button>Create Question</button>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
