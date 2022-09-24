import { useSelector } from "react-redux";
import { questionsSelector } from "../../features/questionsSlice";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";

const Question = () => {
  const { id } = useParams();
  const questions = useSelector(questionsSelector);
  const { author, timestamp, optionOne, optionTwo } = questions.questions[id];

  return (
    <Layout>
      <div>
        <h3>{author}</h3>
        <p>{optionOne.text}</p>
        <p>{optionTwo.text}</p>
      </div>
    </Layout>
  );
};

export default Question;
