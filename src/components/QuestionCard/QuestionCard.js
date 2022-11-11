import styles from "./questionCard.module.css";
import { Link } from "react-router-dom";
import { formattedDate } from "../../utils/helper";

const QuestionCard = ({ question }) => {
  const { id, author, timestamp } = question;

  return (
    <Link to={`/question/${id}`}>
      <section className={styles.questionCard}>
        <h3 className={styles.author}>{author}</h3>
        <p>{formattedDate(timestamp).date}</p>
        <p>Time: {formattedDate(timestamp).time}</p>
      </section>
    </Link>
  );
};

export default QuestionCard;
