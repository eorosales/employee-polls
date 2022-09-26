import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { saveNewQuestion } from "../../features/questionsSlice";
import { getAuthedUser } from "../../features/authedUserSlice";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);

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

    const newQuestion = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };

    dispatch(saveNewQuestion(newQuestion));
  };

  return (
    <Layout>
      <div className='new-question'>
        <div className='new-question__container'>
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
    </Layout>
  );
};

export default NewQuestion;
