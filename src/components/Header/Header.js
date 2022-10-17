import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authedUserSelector,
  logoutUser,
} from "../../slices/authedUserSlice/authedUserSlice";
import styles from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authedUser } = useSelector(authedUserSelector);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to='/'>
          Home
        </Link>
        <Link className={styles.navLink} to='/leaderboard'>
          Leaderboard
        </Link>
        <Link className={styles.navLink} to='/new-question'>
          New
        </Link>
      </nav>
      <div className={styles.activeUser}>
        <span>{authedUser}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
