
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createOneSongRequest } from "../../store/songrequest";

const CreateSongRequest = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const userId = user?.id;
  
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [like, setLike] = useState("");

  
  const onSubmit = async (e) => {
    e.preventDefault();

    const newSongRequest = {
      songName: songName,
      artist: artist,
      like: like
    };
    const success = await dispatch(createOneSongRequest(newSongRequest, userId));
    if (success) {
      setSongName("");
      setArtist("");
      setLike("")
    }
  };

  return (
    <form onSubmit={onSubmit} className="create-song-request-form">
      <input
        type="text"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
        className="song-name-input"
        placeholder="Song Name"
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="artist-input"
        placeholder="Artist"
      />
       <input
        type="text"
        value={like}
        onChange={(e) => setLike(e.target.value)}
        className="like-input"
        placeholder="Like"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default CreateSongRequest;
