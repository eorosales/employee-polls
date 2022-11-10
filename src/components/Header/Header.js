import styles from "./header.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  authedUserSelector,
  logout,
} from "../../slices/authedUserSlice/authedUserSlice";
import { usersSelector } from "../../slices/usersSlice/usersSlice";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authedUser } = useSelector(authedUserSelector);
  const { users } = useSelector(usersSelector);

  const avatar = () => {
    const firstName = users[authedUser].name.slice(" ")[0];
    const lastName = users[authedUser].name.slice(" ")[1];
    return (
      <img
        src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${firstName}+${lastName}`}
        alt='avatar'
      />
    );
  };

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <Link to='/'>Dashboard</Link>
          <Link to='/leaderboard'>Leaderboard</Link>
          <Link to='/add'>New</Link>
        </nav>
        <div className={styles.header__userInfo}>
          <span>{avatar()}</span>
          <span>{authedUser}</span>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Header;
