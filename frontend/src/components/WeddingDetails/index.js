import React, { useEffect, useState } from "react";
import "./WeddingDetails.css";
// import { getUsers } from "../../store/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getRegistries } from "../../store/registries";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";
import Registry from "../Registries";
import CreateRegistry from "../Registries/CreateRegistry";
import detailsforwedding from "../../assets/detailsforwedding.jpg";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import Photos from "../Photo";
import CreatePhoto from "../Photo/PhotoForm";
import { fetchPhotos } from "../../store/photos";
import { getSongRequests } from "../../store/songrequest";
import { getComments } from "../../store/comments";
import SongRequest from "../SongRequest";

import CreateSongRequestForm from "../SongRequest/CreateSongRequest";



const WeddingDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRegistriesOpen, setIsRegistriesOpen] = useState(false);
  const [isGalleriesOpen, setIsGalleriesOpen] = useState(false);
  const [isSongRequestOpen, setIsSongRequestOpen] = useState(false);
  const [isGuestlistOpen, setIsGuestlistOpen] = useState(false);
  const users = useSelector((state) => state?.users);

  const registries = useSelector((state) => state?.registries);
  const photos = useSelector((state) => state?.photos);
  const songRequests = useSelector((state) => state?.songRequests);

  const songRequestsVal = Object?.values(songRequests);
  const currentUser = useSelector((state) => state?.session?.user);
  // const songRequestsVal = useSelector((state) => Object?.values(state?.songRequests));
  const currentUserId = currentUser?.id;
  const history = useHistory();
  const registriesVal = Object?.values(registries);

  const usersVal = Object?.values(users);
  const dispatch = useDispatch();

  const findRegistry = registriesVal?.find(
    ({ userId }) => userId === currentUserId
  );

  const findPhoto = Object?.values(photos)?.find(
    ({ userId }) => userId === currentUserId
  );
  const photosVal = Object?.values(photos);

  const findSongRequests = songRequestsVal?.find(
    ({ userId }) => userId === currentUser?.id
  );

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getRegistries());
    dispatch(fetchPhotos());
    dispatch(getSongRequests());
  }, [
    dispatch,
    JSON.stringify(currentUser),
    JSON.stringify(registriesVal),
    JSON.stringify(photosVal),
    JSON.stringify(songRequestsVal),
  ]);

  const toggleDetailsDropdown = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  const toggleRegistriesDropdown = () => {
    setIsRegistriesOpen(!isRegistriesOpen);
  };

  const toggleGalleriesDropdown = () => {
    setIsGalleriesOpen(!isGalleriesOpen);
  };

  const toggleSongRequestDropdown = () => {
    setIsSongRequestOpen(!isSongRequestOpen);
  };
  const toggleGuestlistDropdown = () => {
    setIsGuestlistOpen(!isGuestlistOpen);
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
     
      <div
        id="wedding-details-section"
        className="dropdown-big-title-wedding-details"
      >
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

      <div
        id="registries-section"
        className="dropdown-big-title-wedding-details"
      >
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
        
                <Registry registry={registry}  />
               
              </div>
            ))}
            <div className="registrycantfindpost">
            {!findRegistry ? <CreateRegistry /> : <></>}
            </div>
          </div>
        ) }
      </div>

      <div id="gallery-section" className="dropdown-big-title-wedding-details">
        <div
          className="big-title-header-wedding-details"
          onClick={toggleGalleriesDropdown}
        >
          Gallery
        </div>
        {isGalleriesOpen && (
          <div className="photos5">
            {currentUser &&
              photosVal?.map((photo) => (
                // const findPhoto = photo.find({userId} => userId === currentUserId)
                <Photos key={photo?.id} photo={photo} />
              ))}
            <div className="create-list">
              {!findPhoto ? <CreatePhoto /> : <></>}
            </div>
          </div>
        )}
      </div>

      <div
        id="song-request-section"
        className="dropdown-big-title-wedding-details"
      >
        <div
          className="big-title-header-wedding-details"
          onClick={toggleSongRequestDropdown}
        >
          Song Request
        </div>


        {isSongRequestOpen && (
          <div className="song-request">  

          {songRequestsVal?.map((songrequest) => (
          <div className="song-request-2">
              <SongRequest key={songrequest?.id} songRequest={songrequest} />
            </div>
            ))}   
         {!findSongRequests ? <CreateSongRequestForm/> : <></>}
        </div>
        )}
      </div>

      <div
        id="guestlist-section"
        className="dropdown-big-title-wedding-details"
      >
        <div
          className="big-title-header-wedding-details"
          onClick={toggleGuestlistDropdown}
        >
          Guestlist
        </div>
       
      </div>
    </div>
  );
};

export default WeddingDetails;