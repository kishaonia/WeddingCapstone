import React from "react";
import { useSelector } from "react-redux";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import DeleteSongRequest from "./DeleteSongRequest";
import CreateSongRequest from "./CreateSongRequest";
import UpdateSongRequest from "./UpdateSongRequest";

const SongRequest = ({ songRequest }) => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="song-request-container" id={songRequest?.id}>
      {/* <div className="song-request-slideshow"> */}
        <h4 className="song-request-name">
          {songRequest?.User?.firstName} {songRequest?.User?.lastName}
        </h4>
        <p className="song-request-item-title">{songRequest?.songName}</p>
       <p>{songRequest?.artist}</p> 
       <p>{songRequest?.like}</p> 
        <div className="update-delete">
        {currentUser?.id === songRequest?.User?.id ? <OpenModalMenuItem itemText="Delete" modalComponent={<DeleteSongRequest songRequestId={songRequest?.id}/>}/>:<></>}
      {currentUser?.id === songRequest?.User?.id ? <OpenModalMenuItem itemText="Update" modalComponent={<UpdateSongRequest songRequest={songRequest}/>}/>:<></>}
        </div>
      {/* </div> */}
    </div>
  );
};

export default SongRequest;

