import React, { useEffect, Fragment } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUser, setAuthedUser } from "./features/authedUserSlice";
import { fetchQuestions } from "./features/questionsSlice";
import { fetchUsers } from "./features/usersSlice";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
// import Leaderboard from "./components/Leaderboard/Leaderboard";
// import NewQuestion from "./components/NewQuestion/NewQuestion";
import LoadingBar from "react-redux-loading-bar";

function App() {
  const dispatch = useDispatch();
  const AUTHED_USER_ID = useSelector(getAuthedUser);

  useEffect(() => {
    const handleInitialData = () => {
      dispatch(fetchQuestions());
      dispatch(fetchUsers());
      dispatch(setAuthedUser(AUTHED_USER_ID));
    };
    handleInitialData();
  }, [AUTHED_USER_ID, dispatch]);

  return (
    <Fragment>
      <div className='container'>
        <Fragment>
          <Routes>
            <Route
              path='/login'
              element={AUTHED_USER_ID ? <Dashboard /> : <Login />}
            />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/question/:id' element={<Question />} />
          </Routes>
        </Fragment>
      </div>
    </Fragment>
  );
}

export default App;
