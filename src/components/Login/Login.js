import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersSelector, fetchUsers } from "../../slices/usersSlice/usersSlice";
import { login } from "../../slices/authedUserSlice/authedUserSlice";
import styles from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, usersStatus } = useSelector(usersSelector);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, usersStatus]);

  const usersList = () => {
    return Object.keys(users).map((user) => {
      return <option key={user}>{user}</option>;
    });
  };

  const handleUserSelect = (e) => {
    e.preventDefault();
    setSelectedUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(selectedUser));
    navigate("/");
  };

  return (
    <>
      <div className={styles.login}>
        <h3>Login</h3>
        <p>Select username to continue</p>
        <form onSubmit={handleSubmit}>
          <select defaultValue='' onChange={handleUserSelect} required>
            <option disabled value=''>
              Select User
            </option>
            {usersList()}
          </select>
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
