import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className='App'>
      <Login />
      {/* <Dashboard /> */}
      {/* <Leaderboard /> */}
    </div>
  );
}

export default App;
