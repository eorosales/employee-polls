import { useSelector } from "react-redux";
import { avatar } from "../../utils/helper";
import styles from "./leaderboard.module.css";

const Leaderboard = () => {
  const { users, usersStatus } = useSelector((state) => state.users);

  // Create table on the page
  const instantiateTable = () =>
    Object.keys(users)
      // Sort questions from newest on top to oldest on the bottom
      .sort((a, b) => {
        const usersA =
          Object.values(users[b].answers).length +
          Object.values(users[b].questions).length;
        const usersB =
          Object.values(users[a].answers).length +
          Object.values(users[a].questions).length;
        return usersA - usersB;
      })
      .map((user) => {
        const amountAnswered = Object.keys(users[user].answers).length;
        const amountCreated = Object.keys(users[user].questions).length;
        return (
          <tr key={users[user].id}>
            <td>
              {avatar(users[user].name, 40)}
              {users[user].name}
            </td>
            <td>{amountAnswered}</td>
            <td>{amountCreated}</td>
          </tr>
        );
      });

  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboard__container}>
        <h3>Leaderboard</h3>
        <h4>See Where You Stand</h4>

        <table>
          <thead>
            <tr>
              <th>Users</th>
              <th>Answered</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>{usersStatus === "success" && instantiateTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
