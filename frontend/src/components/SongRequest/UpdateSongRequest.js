import { updateOneSongRequest } from "../../store/songrequest";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useModal } from "../../context/Modal";
import { useSelector } from "react-redux";

const UpdateSongRequest = ({ songRequest }) => {
  const songRequestId = songRequest?.id;

  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [songTitle, setSongTitle] = useState(songRequest?.songTitle);
  const [artist, setArtist] = useState(songRequest?.artist);
  const [like, setLike] = useState(songRequest?.like);
  const [error, setError] = useState({});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!songTitle) {
      setError({ songTitle: "Song title is required" });
      return;
    }
    if (!artist) {
      setError({ artist: "Artist name is required" });
      return;
    }
    const newSongRequest = {
      songTitle,
      artist,
      like,
    };
    dispatch(updateOneSongRequest(newSongRequest, songRequestId)).then(
      closeModal
    );
  };

  const onCancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <>
      <div className="song-request-form-pop-up">
        <form className="song-request-form" onSubmit={onSubmit}>
          <label className="song-request-title">Editing a Song Request?</label>
          <input
            type="text"
            placeholder="Song Title"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
          />
          {error.songTitle && <span className="error">{error.songTitle}</span>}
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
          <button className="submit-song-request" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateSongRequest;
