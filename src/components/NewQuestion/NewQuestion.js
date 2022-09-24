import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../features/questionsSlice";
import { getAuthedUser } from "../../features/authedUserSlice";

const NewQuestion = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleOptionOne = (e) => {
    setOptionOne(e.target.value);
  };

  const handleOptionTwo = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      optionOne,
      optionTwo,
      author: authedUser.id,
    };

    dispatch(addQuestion(newQuestion));
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
