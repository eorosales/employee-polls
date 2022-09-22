import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "../../features/usersSlice";

const Leaderboard = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector(usersSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return <div>{users}</div>;
};

export default Leaderboard;
