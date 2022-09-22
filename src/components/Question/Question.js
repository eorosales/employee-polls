import { useSelector } from "react-redux";
import { getAuthedUser } from "../../features/authedUserSlice";
import { questionsSelector } from "../../features/questionsSlice";
import { getUsers } from "../../features/usersSlice";
import * as DataAPI from "../../_DATA";

const Question = (props) => {
  const authedUser = useSelector(getAuthedUser);
  const users = useSelector(getUsers);
  const { questions } = useSelector(questionsSelector);

  const { author, optionOne, optionTwo } = questions[props.id];

  return (
    <div>
      <div>{author}</div>
      <div>{optionOne.text}</div>
      <div>{optionTwo.text}</div>
    </div>
  );
};

export default Question;
