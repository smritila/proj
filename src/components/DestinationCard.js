// import React from "react";
// import "./DestinationCard.css";

// function DestinationCard({ image, title, specialTag }) {
//   return (
//     <div className="destination-card">
//       <img src={image} alt={title} className="destination-image" />
//       <div className="destination-overlay">
//         <h3 className="destination-title">{title}</h3>
//         {specialTag && (
//           <div className="destination-special-tag">{specialTag}</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default DestinationCard;
import React from "react";
import "./DestinationCard.css";

function DestinationCard({ image, title, description, metric }) {
  return (
    <div className="destination-card">
      <img src={image} alt={title} className="destination-image" />
      <div className="destination-content">
        <h3 className="destination-title">{title}</h3>
        <p className="destination-description">{description}</p>
        {metric && <div className="destination-metric">{metric}</div>}
        <div className="destination-arrow">→</div>
      </div>
    </div>
  );
}

export default DestinationCard;
