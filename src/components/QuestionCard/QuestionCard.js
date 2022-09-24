import React from "react";
import { Link } from "react-router-dom";
import styles from "./questionCard.module.css";

const QuestionCard = ({ question }) => {
  const { id, author, timestamp } = question;
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
    <Link to={`/question/${id}`}>
      <section className={styles.questionCard}>
        <h3 className={styles.author}>{author}</h3>
        <span className={styles.info}>
          {formattedDate().date} | {formattedDate().time}
        </span>
      </section>
    </Link>
  );
};

export default QuestionCard;
