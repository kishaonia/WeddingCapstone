import React from "react";
import "./WeddingDetails.css";
import { getUsers } from "../../store/users";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";
import Registry from "../Registries";
import CreateRegistry from "../Registries/CreateRegistry";



const WeddingDetails = () => {
const users = useSelector(state => state?.users)
const currentUser = useSelector(state => state.session.user)
const history = useHistory()
const usersVal = Object?.values(users)
console.log('Users', usersVal)
const dispatch = useDispatch()

if (!currentUser) {
  history.push('/')
}

useEffect(() => {

dispatch(getUsers())

}, [dispatch, JSON.stringify(usersVal)])


  return (
    <div className="wedding-details">
      <div className="wedding-details-header">
        <img src={weddingdetailsbg} />
        <div className="overlay-wedding-details-header">
          <div className="text-on-overlay-wedding-details-header">
            <h2>Our Wedding</h2>
            <p>December xx, 2023</p>
            <p>We can't wait to celebrate with you!</p>
          </div>
        </div>
      </div>
      <div className="big-title-header-wedding-details">Wedding Details</div>
      <div className="ceremony-reception">
        <div className="ceremony-text">
          <i className="fas fa-dove"></i> Ceremony
        </div>
        <div className="reception-text">
          <i className="fas fa-cocktail"></i> Reception
        </div>
        <div className="small-svg-details">
        <div className="first-three-wedding-details">
          <div className="unitedstatestomanilaplane">
            <i className="fas fa-plane-departure"></i> Manila International
            Airport
          </div>
          <div className="dresscodewedding">
            <i className="fas fa-user-tie"></i> Dress Code
          </div>
          <div className="wheretogoweddingdetail">
            <i className="fas fa-shoe-prints"></i> Where to go
          </div>
          <div className="willreplacenoideayet">
            <i className="fas fa-gamepad"></i>
            <i className="fas fa-gamepad"></i>
            <i className="fas fa-gamepad"></i> more...
          </div>
          
        </div>
       
      </div>
      </div>
      <h1>Registries</h1>
      <div className="registry-list-style">
      {usersVal?.map(user => 
        <div className="registry-list" key={user?.id} >
          <Registry user={user}/>
        </div>
      )}
       <div className="registry-list-style-form">Create a registry?<CreateRegistry/></div>
    </div>
    
    </div>
    
  );
};

export default WeddingDetails;
