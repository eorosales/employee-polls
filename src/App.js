import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthedUser, setAuthedUser } from "./features/authedUserSlice";
import { fetchQuestions } from "./features/questionsSlice";
import { fetchUsers } from "./features/usersSlice";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NewQuestion from "./components/NewQuestion/NewQuestion";

function App() {
  const dispatch = useDispatch();
  const AUTHED_USER_ID = "tylermcginnis";

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
      {/* {authedUser ? (
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/new-question' element={<NewQuestion />} />
          </Routes>
        </>
      )} */}
    </div>
  );
}

export default App;
