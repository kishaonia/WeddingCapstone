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
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRegistriesOpen, setIsRegistriesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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

  const toggleDetailsDropdown = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const toggleRegistriesDropdown = () => {
    setIsRegistriesOpen(!isRegistriesOpen);
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryOpen(!isGalleryOpen);
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
        <div
          className="big-title-header-wedding-details"
          onClick={toggleDetailsDropdown}
        >
          Wedding Details
        </div>
        {isDetailsOpen && (
          <div className="ceremony-reception">
            <img className="img-details" src={detailsforwedding} />
          </div>
        )}
      </div>

      <div className="dropdown-big-title-wedding-details">
        <div
          className="big-title-header-wedding-details"
          onClick={toggleRegistriesDropdown}
        >
          Registries
        </div>
        {isRegistriesOpen && (
          <div className="registry-list-style">
            {registriesVal?.map((registry) => (
              <div className="registry-list" key={registry?.id}>
                <Registry registry={registry} />
              </div>
            ))}
            <CreateRegistry />
          </div>
        )}
      </div>

      <div className="dropdown-big-title-wedding-details">
        <div
          className="big-title-header-gallery"
          onClick={toggleGalleryDropdown}
        >
          Gallery
        </div>
        {isGalleryOpen && (
          <div className="photos5">
            {users &&
              Object.values(users).map((user) => (
                <Photos key={user?.id} user={user} />
              ))}
            <div className="create-list">
              <CreatePhoto />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeddingDetails;
