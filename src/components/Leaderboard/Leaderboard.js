import { useSelector } from "react-redux";

import styles from "./leaderboard.module.css";

const Leaderboard = () => {
  const { users } = useSelector((state) => state.users);

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
          {Object.keys(users)
            .sort((a, b) => {
              return (
                Object.values(users[b].answers).length +
                Object.values(users[b].questions).length -
                Object.values(users[a].answers).length +
                Object.values(users[a].questions).length
              );
            })
            .map((user) => {
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
