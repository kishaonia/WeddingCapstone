import React, { useEffect, useState } from "react";
import "./WeddingDetails.css";
import { getUsers } from "../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRegstries } from "../../store/registries";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";
import Registry from "../Registries";
import CreateRegistry from "../Registries/CreateRegistry";
import detailsforwedding from "../../assets/detailsforwedding.jpg";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import Photos from "../Photo";
import CreatePhoto from "../Photo/PhotoForm";



const WeddingDetails = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const users = useSelector((state) => state?.users);
  const registries = useSelector((state) => state?.registries);
  const currentUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const registriesVal = Object?.values(registries);
  const usersVal = Object?.values(users);
  const dispatch = useDispatch();
  

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRegstries());
  }, [dispatch, JSON.stringify(usersVal), JSON.stringify(registriesVal)]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="wedding-details">
      <div className="wedding-details-header">
        <img src={weddingdetailsbg} alt="Wedding Details Background" />
        <div className="overlay-wedding-details-header">
          <div className="text-on-overlay-wedding-details-header">
            <h2>Our Wedding</h2>
            <p>December xx, 2023</p>
            <p>We can't wait to celebrate with you!</p>
          </div>
        </div>
      </div>
      <div className="dropdown-big-title-wedding-details">
        <div className="big-title-header-wedding-details"
          onClick={toggleDropdown}
        >
          Wedding Details
        </div>
        {isDropdownOpen && (


<div className="ceremony-reception">
<img className="img-details" src={detailsforwedding}  />
{/* <div className="ceremony-text">
  <i className="fas fa-dove"></i>
  <h4>Ceremony</h4>
  <i className="fas fa-cocktail"></i>
  <h4>Reception</h4>
</div>
<br />
<div className="small-svg-details">
  <div className="first-three-wedding-details">
    <div>
      <i className="fas fa-plane-departure"></i> Manila International Airport
    </div>
    <div>
      <i className="fas fa-user-tie"></i> Dress Code
    </div>
    <div>
      <i className="fas fa-shoe-prints"></i> Where to go
    </div>
    <div>
      <i className="fas fa-gamepad"></i>
      <i className="fas fa-gamepad"></i>
      <i className="fas fa-gamepad"></i> more...
    </div>
  </div>
</div> */}
</div>
        )}


      </div>
      
      <div className="big-title-header-wedding-details">
          Registries
        </div>
      <div className="registry-list-style">
        {registriesVal?.map((registry) => (
          <div className="registry-list" key={registry?.id}>
            <Registry registry={registry} />
          </div>
        )) }
        <div className="registry-list-style-form"> 
        
        </div><CreateRegistry />
      </div>
      <div className="big-title-header-gallery">
          Gallery
        </div>
      <div className="photos5">
  {users && Object.values(users).map(user => (
    <Photos key={user?.id} user={user}
     />
  ))}
  <CreatePhoto/>
</div>


    </div>
  );
};

export default WeddingDetails;
