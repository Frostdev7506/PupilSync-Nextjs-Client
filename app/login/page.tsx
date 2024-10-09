"use client";
import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import styles from "../styles/LoginForm.module.css";
import { useAppDispatch, useAppSelector } from "../customhooks/hooks";
import { loginAsync } from "../redux/authSlice"; // Adjust the path accordingly
import { RootState } from "../store"; // Adjust the path accordingly

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState("Teacher Login");
  const [passError, setPassError] = useState<string | null>(null);
  const [appType, setAppType] = useState("users");

  const dispatch = useAppDispatch();
  const isLogin = useAppSelector((state: RootState) => state.auth.loginState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginAsync({ username, password, appType }));
  };

  const checkPass = (passValue: string): string | null => {
    if (passValue.length === 0) {
      return "";
    }
    if (passValue.length <= 7) {
      return "Password must be at least 8 characters long";
    }
    return null;
  };

  const changeForm = () => {
    if (formType === "Teacher Login") {
      setAppType("admins");
      setFormType("Admin Login");
    } else {
      setAppType("users");
      setFormType("Teacher Login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.headingContainer}>
          <button onClick={changeForm} className={styles.arrowButton}>
            <BsArrowLeftSquareFill size={35} />
          </button>
          <h2 className={styles.heading}>{formType}</h2>
          <button onClick={changeForm} className={styles.arrowButton}>
            <BsArrowRightSquareFill size={35} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            <input
              className={`${styles.input} ${
                isLogin === false ? styles.redBorder : ""
              }`}
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              className={`${styles.input} ${
                isLogin === false ? styles.redBorder : ""
              }`}
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPassError(checkPass(e.target.value));
              }}
            />
            {passError && <p className={styles.errorText}>{passError}</p>}
            {isLogin === false && (
              <p className={styles.errorText}>
                Please check your username or password.
              </p>
            )}
          </div>

          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
