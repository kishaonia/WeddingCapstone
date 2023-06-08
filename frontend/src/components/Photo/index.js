import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPhoto, fetchPhotos } from "../../store/photos";
import { csrfFetch } from "../../store/csrf";
import CreatePhoto from "./PhotoForm";
import DeletePhoto from "./DeletePhoto";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdatePhoto from "./UpdatePhoto";

const Photos = ({ photo }) => {
  const currentUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  if (!currentUser) {
    history.push("/");
  }
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!currentUser) {
  //       history.push("/");
  //     }
  //   };

  //   fetchData();
  // }, [currentUser, history]);

  return (
    <>
    <div className="photos-slideshow">
    
        <div className="update-delete-photo">
          {currentUser?.id === photo?.userId ? (
            <OpenModalMenuItem
              itemText={
                <>
                  <i className="fas fa-trash-alt"></i>
                </>
              }
              modalComponent={<DeletePhoto photoId={photo?.id} />}
            />
          ) : (
            <></>
          )}
          {currentUser?.id === photo?.userId ? (
            <OpenModalMenuItem
              itemText={
                <>
                  <i class="fas fa-undo"></i>
                </>
              }
              modalComponent={<UpdatePhoto photo={photo} />}
            />
          ) : (
            <></>
          )}
        </div>
  
      <div key={photo?.id}>
        <img
          className="photos"
          src={photo?.url}
          style={{ maxHeight: "200px", maxWidth: "350px" }}
        />

        <div className="gallery-info">
          <p className="gallery-name">
            {photo?.User?.firstName} {photo?.User?.lastName}
          </p>
          <p className="gallery-description">"{photo?.description}"</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Photos;
