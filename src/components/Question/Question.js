import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark";
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

  const isAnswered = () => {
    const authedUserAnswers = [
      ...Object.values(questions[id].optionOne.votes),
      ...Object.values(questions[id].optionTwo.votes),
    ];
    return authedUserAnswers.includes(authedUser);
  };

  const handleSelection = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    setSelectedOption(e.target.name);
  };

  // const handleBlur = (e) => {
  //   setSelectedOption("");
  // };

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
      const { author, optionOne, optionTwo } = questions[id];
      return (
        <div className={styles.question}>
          {isAnswered() === false ? (
            <>
              <h3>Answer Question</h3>
              <p>Author: {author}</p>
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
            </>
          ) : (
            <>
              <h3>You Answered This Question</h3>
              <p>
                {questions[id].optionOne.text} vs {questions[id].optionTwo.text}
                , your answer is:
                {questions[id].optionOne.votes.includes(authedUser) ? (
                  <>
                    <span>{questions[id][selectedOption]}</span>
                    <FcCheckmark />
                    <span>{optionOne.votes.length}</span>
                  </>
                ) : (
                  <>
                    <p>{questions[id].optionTwo.text}</p>
                    <span>{optionTwo.votes.length}</span>
                  </>
                )}
              </p>
            </>
          )}
        </div>
      );
    }
  };

  return <div>{handleQuestion()}</div>;
};

export default Question;
