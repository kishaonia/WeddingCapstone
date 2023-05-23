// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import SignupFormModal from "../SignupFormModal";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import { useSelector } from "react-redux";

function LoginFormModal() {
  const currentUser = useSelector(state =>
    state?.session?.user)
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res?.json();
        if (data && data.errors) setErrors(data.errors);
      }).then(history.push('/weddingdetails'))
    
  };

  const demoSignIn = async (e) => {
    e.preventDefault();
    const password = "password";
    const credential = "demouser@aa.io";
    
    try {
      await dispatch(sessionActions.login({ credential, password }));
      closeModal();
      history.push('/weddingdetails');
    } catch (error) {
      console.log(error);
    }
  };
  
  if (currentUser) {
    history.push('/weddingdetails')
  }

  return (
    <>
      <h1 className="login-h1">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
        <label>
          Username or Email:
          <br></br>
          <input
            type="text-login"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          className="button-submit-login"
          type="submit"
          disabled={credential.length < 4 || password.length < 6}
        >
          Log In
        </button>{""}
        <button onClick={demoSignIn} type="submit" id="demo-user-button">
          Demo User
        </button>
     
      <OpenModalMenuItem 
            className="signup-button-home"
            itemText="Sign Up"
            modalComponent={<SignupFormModal />}
          />
         </form>
    </>
  );
}

export default LoginFormModal;
