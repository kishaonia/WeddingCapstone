import { updateOneSongRequest } from "../../../store/songrequest";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../../context/Modal";
import { useSelector } from "react-redux";

const UpdatedSongRequest = ({ updateSongRequest }) => {
  const songRequestId = updateSongRequest?.id;
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const [songName, setSongName] = useState(updateSongRequest?.songName);
  const [artist, setArtist] = useState(updateSongRequest?.artist);
  // const [like, setLike] = useState(songRequest?.like);

  const [error, setError] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!songName) {
      setError({ songName: "Song title is required" });
      return;
    }
    if (!artist) {
      setError({ artist: "Artist name is required" });
      return;
    }

    //  if (!like) {
    //   setError({ like: "Like plz" });
    //   return;
    // }
    const newSongRequest = {
      songName,
      artist,
      // like,
    };
    const success = await dispatch(updateOneSongRequest(newSongRequest, songRequestId))
    if(success.ok){
      closeModal()
    }
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div className="registry-form-pop-up">
        <form className="registry-form" onSubmit={onSubmit}>
          <label className="registry-item-item">Editing a Song Request?</label>
          <input
            type="text"
            placeholder="Song Title"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            required
          />
          {error.songName && <span className="error">{error.songName}</span>}
          <br />
          <label className="song-request-artist">Artist</label>
          <input
            type="text"
            placeholder="Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
          {error.artist && <span className="error">{error.artist}</span>}
          <br />

          {/* <label className="song-request-like">Like</label>
          <input
            type="text"
            placeholder="Like"
            value={like}
            onChange={(e) => setLike(e.target.value)}
            required
          />
          {error.like && <span className="error">{error.like}</span>}
          <br /> */}


          <button className="submit-song-request" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdatedSongRequest;
