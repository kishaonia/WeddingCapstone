import React from "react";
import "./Navigation.css";
import SearchBar from "./SearchBar";
import logoproj1 from "../../assets/logoproj1.jpg"




function Navigation({ isLoaded }) {



 return (
 
  
   <div className="navigation-bar">
     
   <div className="left-navigation-bar">
       <div className="search-bar">
           < SearchBar />
       </div>
       </div>
       <div className="middle-navigation-bar">
     <div className="logo-for-proj">
     <a href="/">
         <img src={logoproj1} height="75px" width="150px" alt="Logo" />
         </a>
           <ul className="drop-down-menu-middle">
               <li>Home </li>
              
               <li>Wedding Details</li>
               <li>Registry</li>
               <li>Gallery</li>
               <li>Song Request</li>
               <li>Guestlist</li>
           </ul>  
       </div>
   </div>


<div className="right-navigation-bar">
   <div className="profile-button"><i className="fa fa-user"></i></div>


</div>
   </div>
 );
}


export default Navigation;