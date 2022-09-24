import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../features/questionsSlice";
import { fetchUsers, usersSelector } from "../../features/usersSlice";
import Layout from "../Layout/Layout";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(usersSelector);
  const { questions } = useSelector(questionsSelector);

  return (
    <Layout>
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
    </Layout>
  );
};

export default Leaderboard;
