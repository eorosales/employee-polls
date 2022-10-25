import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { authedUserSelector } from "../../slices/authedUserSlice/authedUserSlice";
import { questionsSelector } from "../../slices/questionsSlice/questionsSlice";
import UnansweredQuestion from "../UnansweredQuestionForm/UnansweredQuestionForm";
import AnsweredQuestion from "../AnsweredQuestion/AnsweredQuestion";

const Question = () => {
  const { id } = useParams();
  const { questions } = useSelector(questionsSelector);
  const { authedUser } = useSelector(authedUserSelector);

  const isAnswered = () => {
    const authedUserAnswers = [
      ...Object.values(questions[id].optionOne.votes),
      ...Object.values(questions[id].optionTwo.votes),
    ];
    return authedUserAnswers.includes(authedUser);
  };

  return (
    <div>
      {isAnswered() !== true ? (
        <UnansweredQuestion question={questions[id]} />
      ) : (
        <AnsweredQuestion />
      )}
    </div>
  );
};

export default Question;
