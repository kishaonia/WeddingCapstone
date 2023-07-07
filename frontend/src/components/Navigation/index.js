import React from "react";
import "./Navigation.css";
import SearchBar from "./SearchBar";
import logoproj1 from "../../assets/logoproj1.jpg";
import SignupFormModal from "../SignupFormModal";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import ProfileButton from "./ProfileButton";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WeddingDetails from "../WeddingDetails";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state?.session?.user);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    // closeMenu();
    history.push("/");
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li></li>
      </>
    );
  }

  return (
    <div className="navigation-bar">
      <div className="logo-for-proj">
        <img src={logoproj1} height="75px" width="150px" alt="Logo" />
        {sessionLinks}
        {sessionUser && (
          <ul className="drop-down-menu-middle">
            {/* <div className="search-bar">
              <SearchBar />
            </div> */}
            <li onClick={() => document .getElementById("wedding-details-section").scrollIntoView({ behavior: "smooth" }) } > Wedding Details </li>
            <li onClick={() => document.getElementById('registries-section').scrollIntoView({ behavior: 'smooth' })}> Registries</li>
            <li onClick={() => document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' }) }>Gallery </li>
            <li onClick={() => document.getElementById('song-request-section').scrollIntoView({ behavior: 'smooth' })}> Song Request</li>
            <li onClick={() => document.getElementById('guestlist-section').scrollIntoView({ behavior: 'smooth' })}>Guestlist</li>
            <li>
              {/* {" "} */}
              <button className="button-logout" onClick={logout}>
                Log Out
              </button>
            </li>
            <li>{/* <ProfileButton user={sessionUser} /> */}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
