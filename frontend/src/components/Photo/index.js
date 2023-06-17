
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { createLikeRequest, deleteLikeRequest } from "../../store/likes";
// import DeletePhoto from "./DeletePhoto";
// import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
// import UpdatePhoto from "./UpdatePhoto";
// import CreatePhoto from "./PhotoForm"; 

// const Photos = ({ photo }) => {
//   const currentUser = useSelector((state) => state.session.user);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const [like, setLike] = useState(false);

//   if (!currentUser) {
//     history.push("/");
//   }
// const handleClick = () => {
//   setLike(!like);
// };


//   return (
//     <>
  
   
//   <div className="photos-slideshow">
  
//       <div key={photo?.id }>
//       <img
//   className="photos"
//   src={photo?.url}
//   style={{ maxHeight: '200px', maxWidth: '350px' }}
//   alt="Uploaded Photo"
// />


//         <div className="gallery-info">
//         <p className="gallery-name">{photo?.User?.firstName} {photo?.User?.lastName}</p>
//         <p className="gallery-description">"{photo?.description}"</p>
//         </div>
    
        
//         <div className="update-delete"> 
//         {currentUser?.id === photo?.userId ? <OpenModalMenuItem itemText={<><i className="fas fa-trash-alt"></i></>} modalComponent={<DeletePhoto photoId={photo?.id}/>}/>:<></>}
//         {currentUser?.id === photo?.userId ? <OpenModalMenuItem  itemText={<><i class='fas fa-undo'></i></>} modalComponent={<UpdatePhoto photo={photo}/>}/>:<></>}
//         </div>
//         {/* <div className="heart-like" onClick={handleClick}>
//   <i className="fa fa-heart-o"></i>
//   {like ? "Unlike" : "Like"}
// </div> */}

//       </div>
//       </div>
//     </>
//   );
// };

// export default Photos;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createLikeRequest, deleteLikeRequest } from "../../store/likes";
import DeletePhoto from "./DeletePhoto";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import UpdatePhoto from "./UpdatePhoto";
import CreatePhoto from "./PhotoForm";
import { fetchPhotos } from "../../store/photos";

const Photos = ({ photo }) => {
  const currentUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const files = []; // Replace with your file array

  if (!currentUser) {
    history.push("/");
  }

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="photos-slideshow">
        <div key={photo?.id}>
          <img
            className="photos"
            src={photo?.url}
            style={{ maxHeight: '200px', maxWidth: '350px' }}
            alt="Uploaded Photo"
          />

          <div className="gallery-info">
            <p className="gallery-name">{photo?.User?.firstName} {photo?.User?.lastName}</p>
            <p className="gallery-description">"{photo?.description}"</p>
          </div>

          <div className="update-delete">
            {currentUser?.id === photo?.userId ? (
              <OpenModalMenuItem itemText={<><i className="fas fa-trash-alt"></i></>} modalComponent={<DeletePhoto photoId={photo?.id} />} />
            ) : (
              <></>
            )}
            {currentUser?.id === photo?.userId ? (
              <OpenModalMenuItem itemText={<><i className='fas fa-undo'></i></>} modalComponent={<UpdatePhoto photo={photo} />} />
            ) : (
              <></>
            )}
          </div>

          <div>
            {/* <h3>Uploaded Files:</h3> */}
            {files.map((url, index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Photos;
