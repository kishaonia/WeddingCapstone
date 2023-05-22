import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPhoto, fetchPhotos } from "../../store/photos";
import { csrfFetch } from "../../store/csrf";
import CreatePhoto from "./PhotoForm";
import DeletePhoto from "./DeletePhoto";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";

const Photos = ({ user }) => {
  const currentUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser) {
        history.push("/");
      }
    };

    fetchData();
  }, [currentUser, history]);

  return (
    <>
  
   
  <div className="photos-slideshow">
  
  {user?.Photos && (
    user?.Photos.map((photo) => (
      <div key={photo?.id}>
        <img
          className="photos"
          src={photo?.url}
          style={{ maxHeight: '300px', maxWidth: '500px' }}
        />
     
        <p className="gallery-name">{user.firstName} {user.lastName}</p>
        <p className="gallery-description">{user.description}</p>
        {currentUser?.id === photo?.User?.id ? <OpenModalMenuItem itemText="Delete" modalComponent={<DeletePhoto photoId={photo?.id}/>}/>:<></>}
        {photo.description && <p>{photo.description}</p>}
      
      </div>
    ))
  )}
</div>





   

    </>
  );
};

export default Photos;
