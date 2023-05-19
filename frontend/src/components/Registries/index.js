import React from "react";
import "./Registries.css";

const Registries = () => {
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
    <div className="registry">
      <div className="registry-header">Registry</div>
      <div className="photos">
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

export default Registries;
