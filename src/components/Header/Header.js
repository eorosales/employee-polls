import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUser, logoutUser } from "../../features/authedUserSlice";
import "./header.css";

const Header = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(getAuthedUser);

  return (
    <header className='header'>
      <nav className='nav'>
        <Link className='nav-link' to='/dashboard/:id'>
          Home
        </Link>
        <Link className='nav-link' to='/leaderboard'>
          Leaderboard
        </Link>
        <Link className='nav-link' to='/new-question'>
          New
        </Link>
      </nav>
      <div className='active-user'>
        <span>{authedUser.name}</span>

        <button onClick={() => dispatch(logoutUser())}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
