import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authedUserSelector } from "./slices/authedUserSlice/authedUserSlice";

import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Question from "./components/Question/Question";
import NewQuestion from "./components/NewQuestion/NewQuestion";

import "./App.css";

function App() {
  const { authedUser } = useSelector(authedUserSelector);

  return (
    <div className='App'>
      {authedUser === "" ? (
        <div>
          <Login />
        </div>
      ) : (
        <Layout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/question/:id' element={<Question />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
            <Route path='/new-question' element={<NewQuestion />} />
          </Routes>
        </Layout>
      )}
    </div>
  );
}

export default App;
