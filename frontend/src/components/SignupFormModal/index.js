import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";

function SignupFormModal() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return re.test(email);
    };
    
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setErrors(["Password should be longer than 6 characters."]);
      return;
    }
    if (!validateEmail(email)) {
      setErrors(["Enter a valid email."]);
      return;
    }
    

    if (username.length < 4) {
      setErrors(["Username should be longer than 4 characters."]);
      return;
    }

    if (password !== confirmPassword) {
      setErrors(["Confirm Password field must be the same as the Password field."]);
      return;
    }

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        })
        .then(history.push("/weddingdetails"));
    }

    setErrors(["Confirm Password field must be the same as the Password field."]);
    setErrors(["Enter a valid email."]);
  };

  return (
    <>
     
      <form className="signup-form" onSubmit={handleSubmit}>
       
         <h1 className="signup-h1">Sign Up</h1>
         {errors?.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
        <label>
          Email:
          <br />
          <input
          className="input-for-signup"
            type="text-signup"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <br />
          <input
              className="input-for-signup"
            type="text-signup"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          First Name:
          <br />
          <input
              className="input-for-signup"
            type="text-signup"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <br />
          <input
              className="input-for-signup"
            type="text-signup"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <br />
          <input
              className="input-for-signup"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password
          <br />
          <input
              className="input-for-signup"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button
        
          // disabled={
          //   password.length < 6 ||
          //   username.length < 4 ||
          //   password !== confirmPassword ||
          //   !lastName ||
          //   !firstName ||
          //   !email
          // }
          type="submit"
          className="button-submit"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupFormModal
