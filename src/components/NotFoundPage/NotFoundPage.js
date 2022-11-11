import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>The requested page could not be found.</h3>
      <button onClick={() => navigate("/")}>Return to Login</button>
    </div>
  );
};

export default NotFoundPage;
