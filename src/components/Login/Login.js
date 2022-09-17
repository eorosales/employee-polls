// Requires AUTHED_USER and QUESTIONS from store
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "../../features/usersSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector(usersSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return <div>Login</div>;
};

export default Login;
