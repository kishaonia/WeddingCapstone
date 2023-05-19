import React from "react";
import "./WeddingDetails.css";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";

const WeddingDetails = () => {

  return (
    <div className="wedding-details">
      <div className="wedding-details-header">
        <img src={weddingdetailsbg} />
        <div className="overlay-wedding-details-header">
          <div className="text-on-overlay-wedding-details-header">
            <h2>Our Wedding</h2>
            <p>December xx, 2023</p>
            <p>We can't wait to celebrate with you!</p>
          </div>
        </div>
      </div>
      <div className="big-title-header-wedding-details">Wedding Details</div>
      <div className="ceremony-reception">
        <div className="ceremony-text">
          <i className="fas fa-dove"></i> Ceremony
        </div>
        <div className="reception-text">
          <i className="fas fa-cocktail"></i> Reception
        </div>
        <div className="small-svg-details">
        <div className="first-three-wedding-details">
          <div className="unitedstatestomanilaplane">
            <i className="fas fa-plane-departure"></i> Manila International
            Airport
          </div>
          <div className="dresscodewedding">
            <i className="fas fa-user-tie"></i> Dress Code
          </div>
          <div className="wheretogoweddingdetail">
            <i className="fas fa-shoe-prints"></i> Where to go
          </div>
          <div className="willreplacenoideayet">
            <i className="fas fa-gamepad"></i>
            <i className="fas fa-gamepad"></i>
            <i className="fas fa-gamepad"></i> more...
          </div>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default WeddingDetails;
