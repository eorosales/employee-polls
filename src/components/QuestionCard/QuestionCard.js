import React from "react";
import "./questionCard.css";

const QuestionCard = (props) => {
  const { id, timestamp, author } = props.question;

  const date = new Date(timestamp);

  const formattedDate = () => {
    return `${date.getMonth()}/${date.getDay()}/${date.getUTCFullYear()}`;
  };

  const formattedMinutes = () => {
    return `${date.getMinutes()}`.padStart(2, "0");
  };

  return (
    <section className='question-card'>
      <span className='question-card__author'>{author}</span>
      <span className='question-card__date'>
        {`${formattedDate()} | ${date.getUTCHours()}:${formattedMinutes()}`}
      </span>
      <button>Show Details</button>
    </section>
  );
};

export default QuestionCard;
