// Requires AUTHED_USER and QUESTIONS from store
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "../../slices/usersSlice/usersSlice";
import { setAuthedUser } from "../../slices/authedUserSlice/authedUserSlice";
import styles from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector(usersSelector);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersList = () => {
    return Object.values(users).map((user) => {
      return <option key={user.id}>{user.id}</option>;
    });
  };

  const handleUserSelect = (e) => {
    e.preventDefault();

    setSelectedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setAuthedUser(selectedUser));

    navigate("/");
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <h3>LOGIN</h3>
        <p>Select your username.</p>
        <form
          id='loginForm'
          className={styles.login__form}
          onSubmit={handleSubmit}>
          <div className={styles.login__form__userSelect}>
            <select
              id='users'
              name='users'
              defaultValue=''
              onChange={handleUserSelect}
              required>
              <option disabled value=''>
                Select User
              </option>
              {usersList()}
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
