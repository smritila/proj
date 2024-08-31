import React, { useState } from "react";
import DestinationCard from "./DestinationCard";
import "./DestinationGrid.css";

function DestinationGrid() {
  const [activeTab, setActiveTab] = useState("domestic");

  const destinations = {
    domestic: [
      {
        image: "/images/india.jpg",
        title: "India",
        description: "At Stanbrook Tourism, we know that luxury is personal.",
      },
      {
        image: "/images/singapore.jpg",
        title: "Singapore",
        description:
          "Whether you’ve got a destination in mind or you’re open to ideas.",
        metric: "341",
      },
      {
        image: "/images/malaysia.jpg",
        title: "Malaysia",
        description: "There are always exotic destinations around the world.",
      },
    ],
    international: [
      {
        image: "/images/india.jpg",
        title: "India",
        description: "At Stanbrook Tourism, we know that luxury is personal.",
      },
      {
        image: "/images/singapore.jpg",
        title: "Singapore",
        description:
          "Whether you’ve got a destination in mind or you’re open to ideas.",
        metric: "341",
      },
      {
        image: "/images/malaysia.jpg",
        title: "Malaysia",
        description: "There are always exotic destinations around the world.",
        metric: "113",
      },
    ],
  };

  return (
    <section className="destination-grid-section">
      <h2 className="destination-grid-heading">Our Experience Trail</h2>
      <div className="destination-grid-tabs">
        <button
          className={`destination-tab ${
            activeTab === "domestic" ? "active" : ""
          }`}
          onClick={() => setActiveTab("domestic")}
        >
          Domestic
        </button>
        <button
          className={`destination-tab ${
            activeTab === "international" ? "active" : ""
          }`}
          onClick={() => setActiveTab("international")}
        >
          International
        </button>
      </div>
      <div className="destination-grid">
        {destinations[activeTab].map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
            metric={destination.metric}
          />
        ))}
      </div>
      <button className="destination-grid-view-more">View More</button>
    </section>
  );
}

export default DestinationGrid;
