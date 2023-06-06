import React from "react";
import { useSelector } from "react-redux";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import DeleteSongRequest from "./DeleteSongRequest";
import CreateSongRequest from "./CreateSongRequest";
import UpdateSongRequest from "./UpdateSongRequest";
import LikeDislike from "../Likes";



const SongRequest = ({ songRequest }) => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <div className="song-request-container" id={songRequest?.id} > 
      <div className="song-request-header">
        <h4 className="song-request-name">
          {songRequest?.User?.firstName} {songRequest?.User?.lastName}
        </h4>
      </div>
      <div className="song-request-content">
        <p className="song-request-item-title">{songRequest?.songName}</p>
        <div className="song-request-item-info">
          <p>{songRequest?.artist}</p>
          <p>{songRequest?.like}</p>
        </div>
      </div>
      <div className="update-delete">
        {currentUser?.id === songRequest?.User?.id ? (
          <OpenModalMenuItem
            itemText={<i className="fas fa-trash-alt"></i>}
            modalComponent={<DeleteSongRequest songRequestId={songRequest?.id} />}
          />
        ) : (
          <></>
        )}
        {currentUser?.id === songRequest?.User?.id ? (
          <OpenModalMenuItem
            itemText={<i className="fas fa-undo"></i>}
            modalComponent={<UpdateSongRequest songRequest={songRequest} />}
          />
        ) : (
          <></>
        )}
      </div>
      {/* <LikeDislike/> */}

    </div>
  );
};
export default SongRequest;

