import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import DeleteSongRequest from "./DeleteSongRequest";
import UpdatedSongRequest from "./UpdateSong/UpdateSongRequest";
import LikeDislike from "../Likes";
import MiniMusicPlayer from "./musicplayer";
import { getSongRequests } from "../../store/songrequest";
import { useState } from "react";
import CreateSongRequestForm from "./CreateSongRequest";
import { useHistory } from "react-router-dom";

const SongRequest = ({songRequest}) => {
  const songRequestId = songRequest?.id;
  const currentUser = useSelector((state) => state.session.user);
  // const songRequests = useSelector((state) => state.songRequests);
  const dispatch = useDispatch();
  const history = useHistory();
  const [songName, setSongName] = useState(songRequest?.songName);
  const [artist, setArtist] = useState(songRequest?.artist);
  const [like, setLike] = useState(songRequest?.like);
  const [error, setError] = useState({});
  const User = useSelector((state) => state?.users);
  const songRequests = useSelector((state) => state?.songRequests);

  // const songRequestsVal = Object?.values(songRequests);
  if (!currentUser) {
    history.push("/");
  }
  
  useEffect(() => {
    dispatch(getSongRequests());
  }, [
    dispatch,
    JSON.stringify(songRequest),
    JSON.stringify(currentUser),
    JSON.stringify(songRequestId)
  ]);

 
  return (
<<<<<<< HEAD
    <div className="song-request-container" id="song-request-container">
       
      <div className="songreqid" key={songRequestId}>
        <div className="song-request-header">
          {`${songRequest?.User?.firstName} ${songRequest?.User?.lastName}`}
        </div>
        <div className="song-request-content">
  {songRequest?.songName}
  <div className="song-request-item-info">
    {songRequest?.artist}
  </div>
</div>

                    </div>
        <div className="update-delete-song">
=======
    <div className="song-request-container">
          <h1>hello!</h1>
        
          <div key={songRequestId}>
            <div className="song-request-header">
              <h4 className="song-request-name">{`${songRequest?.User?.firstName} ${songRequest?.User?.lastName}`}</h4>
            </div>
            <div className="song-request-content">
              <p className="song-request-item-title">{songRequest?.songName}</p>
              <div className="song-request-item-info">
                <p>{songRequest?.artist}</p>
           
              </div>
            </div>
        
            <div className="update-delete-song">
         
>>>>>>> parent of f049dbd (1st big push of the night)
          {currentUser?.id === songRequest?.User?.id && (
            <OpenModalMenuItem
              itemText={
                <>
                  del ete
                </>
              }
              modalComponent={<DeleteSongRequest songRequestId={songRequest?.id} />}
            />
          )}


          {currentUser?.id === songRequest?.User?.id && (
            <OpenModalMenuItem
              itemText={
                <>
                  edit
                  {/* <i class="fas fa-undo"></i> */}
                </>
              }
              modalComponent={<UpdatedSongRequest updateSongRequest={songRequest} />}
            />
          )}


            </div>
        
          </div>
      
   
    </div>
  );
};

export default SongRequest;
