// export default DestinationCard;
import React from "react";
import "./DestinationCard.css";

function DestinationCard({ image, title, description, metric }) {
  return (
    <div className="destination-card">
      <div className="destination-image-container">
        <img src={image} alt={title} className="destination-image" />
      </div>
      <h3 className="absolute-positioned destination-title">{title}</h3>
      {/* <div className="destination-content">
        
        <p className="destination-description">{description}</p>
        {metric && <div className="destination-metric">{metric}</div>}
        <div className="destination-arrow">→</div>
      </div> */}
    </div>
  );
}

export default DestinationCard;
