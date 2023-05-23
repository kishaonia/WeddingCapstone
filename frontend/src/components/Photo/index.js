import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPhoto, fetchPhotos } from "../../store/photos";
import { csrfFetch } from "../../store/csrf";
import CreatePhoto from "./PhotoForm";
import DeletePhoto from "./DeletePhoto";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdatePhoto from "./UpdatePhoto";


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
    user?.Photos?.map((photo) => (
      <div key={photo?.id}>
        <img
          className="photos"
          src={photo?.url}
          style={{ maxHeight: '200px', maxWidth: '400px' }}
        />
     
        <p className="gallery-name">{user?.firstName} {user?.lastName}</p>
        <p className="gallery-description">{photo?.description}</p>
        
        <div className="update-delete"> 
        {currentUser?.id === photo?.userId ? <OpenModalMenuItem itemText="Delete" modalComponent={<DeletePhoto photoId={photo?.id}/>}/>:<></>}
        {currentUser?.id === photo?.userId ? <OpenModalMenuItem itemText="Update" modalComponent={<UpdatePhoto photo={photo}/>}/>:<></>}
        </div>
      </div>
    ))
  )}
  
</div>





   

    </>
  );
};

export default Photos;
