import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";
import SearchBar from "./SearchBar";
import logoproj1 from "../../assets/logoproj1.jpg"


function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state?.session?.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = (
//       <li>
//         {/* <ProfileButton user={sessionUser} /> */}
//       </li>
//     );
//   } else {
//     sessionLinks = (
//       <li>
//         <OpenModalMenuItem
//           buttonText="Log In"
//           modalComponent={<LoginFormModal />}
//         />

//         <OpenModalMenuItem
//           buttonText="Sign Up"
//           modalComponent={<SignupFormModal />}
//         />
//       </li>
//     );
//   }

  return (
    // <div className="navbar">
    //   <div className="left-nav-bar">
    //     <a href="/">
    //     </a>
    //   </div>
    //   <div className="right-nav-bar">
    //     {sessionUser && isLoaded && (
    //       <NavLink className="create-spot-link" exact to="/spots/new">
    //         create a new spot
    //       </NavLink>
    //     )}

    //     <button className="profile-button">
    //       {/* <ProfileButton user={sessionUser} /> */}
    //     </button>
    //   </div>
    // </div>
    
    <div className="navigation-bar">
    <div className="left-navigation-bar">
        <div className="search-bar">
			< SearchBar />
		</div>
        </div>
    <div className="middle-navigation-bar">
      <div className="logo-for-proj">
          <img src={logoproj1} height="75px" width="150px" alt="Logo" />
       
       
            <ul className="drop-down-menu-middle">
                <li>Home</li>
                <li>Wedding Details</li>
                <li>Registry</li>
                <li>Gallery</li>
                <li>Song Request</li>
                <li>Guestlist</li>
            </ul>
            </div>
    </div>

<div className="right-navigation-bar">
    <div className="profile-button"><i class="fa fa-user"></i></div>

</div>
    </div>
  );
}

export default Navigation;
