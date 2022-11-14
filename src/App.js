import "./App.css";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { authedUserSelector } from "./slices/authedUserSlice/authedUserSlice";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Question from "./components/Question/Question";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const RequireAuth = ({ children }) => {
  const { authenticated } = useSelector(authedUserSelector);
  const location = useLocation();
  return authenticated === true ? (
    <Header>{children}</Header>
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  );
};

// questions[question_id] is reuturning undefined, as a result, redirect to 404

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path='/questions/:question_id'
          element={
            <RequireAuth>
              <Question />
            </RequireAuth>
          }
        />
        <Route
          path='/leaderboard'
          element={
            <RequireAuth>
              <Leaderboard />
            </RequireAuth>
          }
        />
        <Route
          path='/add'
          element={
            <RequireAuth>
              <NewQuestion />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
