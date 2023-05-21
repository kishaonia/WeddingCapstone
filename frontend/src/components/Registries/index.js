import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Registries.css";
import CreateRegistry from "./CreateRegistry";

const Registry = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <div className="registry-container">
      <div className="registry-slideshow">
        <p className="registry-name">
          {user?.firstName} {user?.lastName}
        </p>
        <h2 className="registry-item-title">{user?.Registry?.registryItem}</h2>
        <img src={user?.Registry?.url} alt="User Registry" />
      </div>
    </div>
    
  );
  <CreateRegistry/>
};

export default Registry;
