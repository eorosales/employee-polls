import { useSelector } from "react-redux";
import { getAuthedUser } from "../../features/authedUserSlice";
import { questionsSelector } from "../../features/questionsSlice";
import { usersSelector } from "../../features/usersSlice";
import * as DataAPI from "../../_DATA";

const Question = ({ question }) => {
  const { id, author, timestamp, optionOne, optionTwo } = question;

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
    <div>
      <div>Author: {author}</div>
      <div>
        {formattedDate().date} | {formattedDate().time}
      </div>
      <div>Option One: {optionOne.text}</div>
      <div>Option Two: {optionTwo.text}</div>
    </div>
  );
};

export default Question;
