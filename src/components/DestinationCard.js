import React from "react";
import "./DestinationCard.css";

function DestinationCard({ image, title, specialTag }) {
  return (
    <div className="destination-card">
      <img src={image} alt={title} className="destination-image" />
      <div className="destination-overlay">
        <h3 className="destination-title">{title}</h3>
        {specialTag && (
          <div className="destination-special-tag">{specialTag}</div>
        )}
      </div>
    </div>
  );
}

export default DestinationCard;
