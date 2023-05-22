import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Registries.css";
import CreateRegistry from "./CreateRegistry";
import DeleteRegistry from "./DeleteRegistry";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdateRegistry from "./EditRegistry";


const Registry = ({ registry }) => {
 const currentUser = useSelector(state => state.session.user)
 
  return (
            

    <div className="registry-container">
      <div className="registry-slideshow">
        <h4 className="registry-name">
          {registry?.User?.firstName} {registry?.User?.lastName}
        </h4>
        <p className="registry-item-title">{registry?.registryItem}</p>
        <img src={registry?.url} alt="User Registry" />
        <div className="update-delete">
      {currentUser?.id === registry?.User?.id ? <OpenModalMenuItem itemText="Delete" modalComponent={<DeleteRegistry registryId={registry?.id}/>}/>:<></>}
      {currentUser?.id === registry?.User?.id ? <OpenModalMenuItem itemText="Update" modalComponent={<UpdateRegistry registry={registry}/>}/>:<></>}
      </div>
      </div>
    </div>

    
    
  );
 
};

export default Registry;
