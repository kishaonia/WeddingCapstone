import React, { useState } from 'react';
import "./Likes.css"
const HeartButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`stage ${isActive ? 'is-active' : ''}`}>
      <div className="heart" onClick={handleClick}></div>
    </div>
  );
};

export default HeartButton;
