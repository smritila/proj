import React from "react";

import BaseSectionLayout from "./BaseSectionLayout";
import DestinationCardWithInfo from "./DestinationCardWithInfo";

import "./DestinationCarousel.css";
import DestinationImage from "../assets/images/destination-1.png";

function DestinationCarousel() {
  const destinations = [
    {
      title: "India",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Singapore",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Malaysia",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    }
  ];

  return (
    <BaseSectionLayout wrapperClass="carousel-content">
      <div className="carousel-content-header">
        <h2 className="carousel-heading">Explore our Destination</h2>
        <p className="carousel-subheading">
          It’s yours to discover. Whether you’ve got a destination in mind or
          you’re open to ideas, there are many exotic destinations around the
          world which are absolutely magic when it comes to the variety that
          they offer. From the desert regions of Middle East to the beautiful
          locals of Europe, from South America to Australia, South Asia to South
          east and far east Asia, there are amazing countries to choose from.
          Given below are some of the popular worldwide destinations
        </p>
      </div>
      <div className="carousel-container">
        {/* <button className="carousel-nav carousel-nav-left">‹</button> */}
        <div className="carousel-cards">
          {destinations.map((destination, index) => (
            <DestinationCardWithInfo
              key={index}
              image={destination.image}
              title={destination.title}
              description={destination.description}
            />
          ))}
        </div>
        {/* <button className="carousel-nav carousel-nav-right">›</button> */}
      </div>
      <button className="primary-button">View More</button>
    </BaseSectionLayout>
  );
}

export default DestinationCarousel;
