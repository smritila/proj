import React from "react";
import "./DestinationCarousel.css";

function DestinationCard({ image, title, description }) {
  return (
    <div className="carousel-card">
      <img src={image} alt={title} className="carousel-image" />
      <div className="carousel-content">
        <h3 className="carousel-title">{title}</h3>
        <p className="carousel-description">{description}</p>
        <div className="carousel-arrow">→</div>
      </div>
    </div>
  );
}

function DestinationCarousel() {
  return (
    <section className="carousel-section">
      <h2 className="carousel-heading">Explore our Destination</h2>
      <p className="carousel-subheading">
        It's yours to discover. Whether you've got a destination in mind or
        you're open to ideas, there are always exotic destinations around the
        world.
      </p>
      <div className="carousel-container">
        <button className="carousel-nav carousel-nav-left">‹</button>
        <div className="carousel-cards">
          <DestinationCard
            image="/images/Rectangle 15.png"
            title="India"
            description="At Stanbrook Tourism, we know that luxury is personal. We..."
          />
          <DestinationCard
            image="/images/Rectangle 15.png"
            title="Singapore"
            description="Whether you’ve got a destination in mind or you’re open to ideas..."
          />
          <DestinationCard
            image="/images/Rectangle 15.png"
            title="Malaysia"
            description="There are always exotic destinations around the world..."
          />
        </div>
        <button className="carousel-nav carousel-nav-right">›</button>
      </div>
      <button className="carousel-view-more">View More</button>
    </section>
  );
}

export default DestinationCarousel;
