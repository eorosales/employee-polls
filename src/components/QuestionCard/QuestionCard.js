import React from "react";
import styles from "./questionCard.module.css";

const QuestionCard = ({ question }) => {
  const { author, timestamp } = question;
  const formattedDate = () => {
    const created = new Date(timestamp);
    const month = created.toLocaleDateString("en-us", { month: "long" });
    const day = created.getDate();
    const year = created.getFullYear();
    const hours = created.getHours();
    const mins =
      created.getMinutes() < 10
        ? `${created.getMinutes()}`.padStart(2, `0`)
        : created.getMinutes();
    return {
      date: `${month} ${day}, ${year}`,
      time: `${hours}:${mins}`,
    };
  };

  return (
    <section className={styles.questionCard}>
      <h3>{author}</h3>
      <span>
        {formattedDate().date} | {formattedDate().time}
      </span>
      <input type='button' value='Show Details' />
    </section>
  );
};

export default QuestionCard;
