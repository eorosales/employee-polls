import React from "react";
import styles from "./notFoundPage.module.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__container}>
        <h3>404 Error! The requested page could not be found.</h3>
        <button onClick={() => navigate("/")}>Return to Login</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
