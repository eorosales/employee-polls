import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { setAuthedUser } from "./features/authedUserSlice";
import { fetchQuestions } from "./features/questionsSlice";
import { fetchUsers } from "./features/usersSlice";
import Dashboard from "./components/Dashboard/Dashboard";
// import Login from "./components/Login/Login";
// import Header from "./components/Header/Header";
// import Leaderboard from "./components/Leaderboard/Leaderboard";
// import NewQuestion from "./components/NewQuestion/NewQuestion";

function App() {
  const dispatch = useDispatch();
  const AUTHED_USER_ID = "mtsamis";

  useEffect(() => {
    const handleInitialData = () => {
      dispatch(fetchQuestions());
      dispatch(fetchUsers());
      dispatch(setAuthedUser(AUTHED_USER_ID));
    };
    handleInitialData();
  }, [AUTHED_USER_ID, dispatch]);

  return (
    <div className='App'>
      <Dashboard />
    </div>
  );
}

export default App;
