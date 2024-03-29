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
import Guestlist from "../Guestlist";
import CreateComment from "../Comment/CreateComment";
import CreateGuestlist from "../Guestlist/CreateGuestlist";
import { fetchGuestlists } from "../../store/guestlists";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import InformationPhotos from "./information";



const WeddingDetails = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isRegistriesOpen, setIsRegistriesOpen] = useState(false);
  const [isGalleriesOpen, setIsGalleriesOpen] = useState(false);
  const [isSongRequestOpen, setIsSongRequestOpen] = useState(false);
  const [isGuestlistOpen, setIsGuestlistOpen] = useState(false);
  const users = useSelector((state) => state?.users);
  const registries = useSelector((state) => state?.registries);
  const photos = useSelector((state) => state?.photos);
  const guestlists = useSelector((state) => state?.guestlists);
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
  const guestlistVal = Object.values(guestlists || {});

  if (!currentUser) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(getRegistries());
    dispatch(fetchPhotos());
    dispatch(fetchGuestlists());
    
    dispatch(getSongRequests());
    
  }, [
    dispatch,
    JSON.stringify(currentUser),
    JSON.stringify(registriesVal),
    JSON.stringify(photosVal),
    JSON.stringify(guestlistVal),
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
        <div className="big-title-header-wedding-details" 
  onClick={() => {
    toggleRegistriesDropdown();
  }}        >
          Registries
        </div>
        {isRegistriesOpen && (
          <>
           <OpenModalMenuItem
             modalComponent={<InformationPhotos/>}
             className="info-4-photos"
             itemText={<><i class="fa fa-info-circle"></i>
             </>}
             
             />
          <div className="registry-list-style" >  
          
           
             
            {registriesVal?.map((registry) => (
              <div key={registry?.id}><Registry registry={registry}/>
               </div>
              
            )
            
            )
            }
              {!findRegistry ?
               <CreateRegistry /> 
               : <></>}
         
               {/* <CreateRegistry/>:<></> */}
          </div>


          </>
        ) 
        }
      </div>

      <div id="gallery-section" className="dropdown-big-title-wedding-details">
        <div
          className="big-title-header-wedding-details"
          onClick={() => {
            toggleGalleriesDropdown();
          }}

        >
          Gallery
        </div>
     
        {isGalleriesOpen && (
          <>
             <OpenModalMenuItem
             modalComponent={<InformationPhotos/>}
             className="info-4-photos"
             itemText={<><i class="fa fa-info-circle"></i>
             </>}
             
             />
          <div className="photos5">
             
            {currentUser &&
              photosVal?.map((photo) => (
                <Photos key={photo?.id} photo={photo} />
              ))}
            
              {!findPhoto ? <CreatePhoto/>:<></>}
          
          </div>
          </>
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
          
//           <div className="spotify-song-request">  
//  <>
//       <iframe
//         title="Spotify Playlist"
//         src="https://open.spotify.com/embed/playlist/2bkceKUejPhJlzAHyAm1iS"
//         width="100%"
//         height="352"
//         frameBorder="0"
//         allow="encrypted-media"
//         loading="lazy"
//       ></iframe>
//     </>
<div className="song-request">
{songRequestsVal?.map((songrequest) => (
  <div className="song-request-2">
    <SongRequest key={songrequest?.id} songRequest={songrequest} />
  </div>
))}   
{!findSongRequests ? (
  <CreateSongRequestForm/> 
) : (
  <></>
)}
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
        {/* {currentUser &&
              guestlistVal?.map((guestlist) => (
                // const findPhoto = photo.find({userId} => userId === currentUserId)
                <Guestlist key={guestlist?.id} guestlist={guestlist} />
              ))} */}
       {/* <CreateGuestlist/> */}
       {isGuestlistOpen && (


<Guestlist/>
       )}
      
      </div>
    </div>
  );
};

export default WeddingDetails;