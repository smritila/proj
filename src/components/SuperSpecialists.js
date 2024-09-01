import React from "react";
import DestinationCard from "./DestinationCard";
import "./SuperSpecialists.css";

import DestinationImage from "../assets/images/destination-2.png";
import FlightImage from "../assets/images/flight.png";
import DestinationImage3 from "../assets/images/Destination-3.jpg";
import DestinationImage4 from "../assets/images/Destination-4.jpg";
import DestinationImage5 from "../assets/images/Destination-4.jpg";

function SuperSpeciaLists() {
  const destinations = [
    { image: DestinationImage4, title: "South Africa" },
    { image: DestinationImage3, title: "London" },
    { image: DestinationImage, title: "India" },
    { image: DestinationImage, title: "Greece" },
    { image: DestinationImage, title: "America" },
    { image: DestinationImage5, title: "Italy" },
    { image: DestinationImage, title: "Russia" },
    { image: DestinationImage, title: "Japan" },
    { image: DestinationImage, title: "Switzerland" },
  ];

  return (
    <section className="destinations-section">
      <h2 className="destinations-heading">We are Super Specialists</h2>
      <p className="destinations-subheading">
        As a specialist tour operator, we plan unique travel adventures for our
        niche clientele. More specifically, we organize trips for people with
        shared hobbies or interests, such as cycling or hiking, island hopping,
        who would like to engage in such activities during recreational travel.
        Allure Trails organizes very exclusive activities and tours in the
        following countries.
      </p>
      <div className="destinations-grid">
        <img
          className="destinations-section-image"
          alt="Destination Section"
          src={FlightImage}
        />
        {destinations.map((destination, idx) => {
          return (
            <DestinationCard
              key={idx}
              image={destination.image}
              title={destination.title}
            />
          );
        })}
      </div>
      <button className="primary-button" style={{ marginTop: "30px" }}>
        Read More
      </button>
    </section>
  );
}

export default SuperSpeciaLists;
