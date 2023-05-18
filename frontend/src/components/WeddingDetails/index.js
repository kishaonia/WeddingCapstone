import React from "react";
import "./WeddingDetails.css";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";

const WeddingDetails = () => {
  return (
    <div className="wedding-details-header">
      <img src={weddingdetailsbg} height="800px" width="1700px" alt="Wedding Background" />
      <div className="overlay-wedding-details-header">
        <div className="text-on-overlay-wedding-details-header">
          <h2>Our Wedding</h2>
          <p>December xx, 2023</p>
          <p>We can't wait to celebrate with you!</p>
        </div>
      </div>
      
    </div>
   <div className="lol">lol
   </div>
  );
};

export default WeddingDetails;
