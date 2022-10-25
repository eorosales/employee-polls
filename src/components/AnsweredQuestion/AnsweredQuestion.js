import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";

const AnsweredQuestion = () => {
  const { id } = useParams();
  const { questions } = useSelector(questionsSelector);

  return (
    <div>
      <h3>You Answered This Question</h3>
      <div>
        <span>Optione One</span>
        <p>{questions[id].optionOne.text}</p>
      </div>
      <div>
        <span>Optione Two</span>
        <p>{questions[id].optionTwo.text}</p>
      </div>
    </div>
  );
};

export default AnsweredQuestion;
