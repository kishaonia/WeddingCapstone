import React from "react";
import "./Navigation.css";
import SearchBar from "./SearchBar";
import logoproj1 from "../../assets/logoproj1.jpg";
import SignupFormModal from "../SignupFormModal";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import ProfileButton from "./ProfileButton";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import WeddingDetails from "../WeddingDetails";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state?.session?.user);

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
            <li onClick={() => alert("Feature coming soon!")}>
              Wedding Details
            </li>
            <li onClick={() => alert("Feature coming soon!")}>Registry</li>
            <li onClick={() => alert("Feature coming soon!")}>Gallery</li>
            <li onClick={() => alert("Feature coming soon!")}>Song Request</li>
            <li onClick={() => alert("Feature coming soon!")}>Guestlist</li>
            <li>
              <ProfileButton user={sessionUser} />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
