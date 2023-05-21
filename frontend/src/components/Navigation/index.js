import React from "react";
import "./Navigation.css";
import SearchBar from "./SearchBar";
import logoproj1 from "../../assets/logoproj1.jpg";
import SignupFormModal from "../SignupFormModal";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state?.session?.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <li>
          
        </li>
      </>
    );
  } 

  return (
    <div className="navigation-bar">
      <div className="logo-for-proj">
        <img src={logoproj1} height="75px" width="150px" alt="Logo" />

        <ul className="drop-down-menu-middle">
          {sessionLinks}
          {sessionUser && (
            <>
            <div className="search-bar">
            <SearchBar />
          </div>
              <li>Wedding Details</li>
              <li>Registry</li>
              <li>Gallery</li>
              <li>Song Request</li>
              <li>Guestlist</li>
              <li><ProfileButton user={sessionUser} /></li>
            </>
          )}
        </ul>
        
      </div>
    </div>
  );
}

export default Navigation;
