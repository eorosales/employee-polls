import styles from "./newQuestion.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { saveNewQuestion } from "../../slices/usersSlice/usersSlice";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authedUser } = useSelector(authedUserSelector);
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
