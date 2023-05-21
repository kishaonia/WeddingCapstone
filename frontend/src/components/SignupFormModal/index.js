import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import "./SignupForm.css";


function SignupFormModal() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async(e) => {
    e.preventDefault();
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
          if (data && data?.errors) setErrors(data?.errors);
        }).then(history.push('/weddingdetails'))
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ])
  };

  return (
    <>
      <h1 className="signup-h1">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        {errors?.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
        <label>
          Email:<br></br>
          <input
            type="text-signup"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Username:<br></br>
          <input
            type="text-signup"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          First Name:<br></br>
          <input
            type="text-signup"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:<br></br>
          <input
            type="text-signup"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Password:<br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <br></br>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button
          disabled={
            password.length < 6 ||
            username.length < 4 ||
            password !== confirmPassword ||
            !lastName ||
            !firstName ||
            !email
              ? true
              : false
          }
          type="submit"
          className="button-submit"
        >
          
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignupFormModal;
