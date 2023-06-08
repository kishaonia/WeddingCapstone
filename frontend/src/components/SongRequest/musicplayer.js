
import React, { useState } from "react";

const MiniMusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mini-music-player">
      <div className="player-info">
        <h4 className="song-title">{song?.songName}</h4>
        <p className="artist">{song?.artist}</p>
      </div>
      <div className="player-controls">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default MiniMusicPlayer;
