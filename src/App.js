import "./App.css";

import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authedUserSelector } from "./slices/authedUserSlice/authedUserSlice";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Question from "./components/Question/Question";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import NewQuestion from "./components/NewQuestion/NewQuestion";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  const { authedUser } = useSelector(authedUserSelector);

  return (
    <div className='App'>
      {authedUser === "" ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/questions/:question_id' element={<Question />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
              <Route path='/add' element={<NewQuestion />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </Header>
        </>
      )}
    </div>
  );
}

export default App;
