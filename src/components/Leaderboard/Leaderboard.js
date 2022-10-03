import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../slices/questionsSlice";
import { fetchUsers, usersSelector } from "../../slices/usersSlice";

import styles from "./leaderboard.module.css";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  console.log(users);

  useEffect(() => {});

  return (
    <div className={styles.leaderboard}>
      <div>Leaderboard</div>
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(users).map((user) => {
            const amountAnswered = Object.keys(users[user].answers).length;
            const amountCreated = Object.keys(users[user].questions).length;
            return (
              <tr key={users[user].id}>
                <td>{users[user].name}</td>
                <td>{amountAnswered}</td>
                <td>{amountCreated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
