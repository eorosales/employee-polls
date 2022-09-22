// Requires AUTHED_USER and QUESTIONS from store
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, usersSelector } from "../../features/usersSlice";
import { setAuthedUser } from "../../features/authedUserSlice";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, status } = useSelector(usersSelector);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

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
    navigate("/dashboard");
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <h3>LOGIN</h3>
        <p>Select your username.</p>
        <form id='loginForm' className='login__form' onSubmit={handleSubmit}>
          <div className='login__form__user-select'>
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
