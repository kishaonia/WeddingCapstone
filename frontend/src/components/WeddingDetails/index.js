import React from "react";
import "./WeddingDetails.css";
import weddingdetailsbg from "../../assets/weddingdetailsbg.jpg";

const WeddingDetails = () => {
  const registryItems = [
    {
      id: 1,
      name: "KitchenAid Stand Mixer",
      price: "$299.99",
      description: "A powerful stand mixer for all your baking needs.",
      image: "https://example.com/kitchenaid-stand-mixer.jpg",
    },
    {
      id: 2,
      name: "Le Creuset Dutch Oven",
      price: "$249.99",
      description: "A versatile and durable enameled cast iron Dutch oven.",
      image: "https://example.com/le-creuset-dutch-oven.jpg",
    },
    {
      id: 3,
      name: "Instant Pot Pressure Cooker",
      price: "$99.99",
      description: "A multi-functional electric pressure cooker for quick and easy meals.",
      image: "https://example.com/instant-pot-pressure-cooker.jpg",
    },
  ];

  return (
    <div className="wedding-details">
      <div className="wedding-details-header">
        <img src={weddingdetailsbg} alt="Wedding Background" />
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
      <div className="small-svg-details">
        {registryItems.map((item) => (
          <div key={item.id} className="registry-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <p className="item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingDetails;
