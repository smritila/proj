import React from "react";
import "./App.css";
import DestinationCard from "./components/DestinationCard";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img
            src="/images/Group 921.png"
            alt="Stanbrook Tourism Logo"
            className="logo-img"
          />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item active">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Destination</li>
            <li className="nav-item">Philippines Cruises</li>
            <li className="nav-item">Mice & Wedding</li>
            <li className="nav-item">Ultra Luxury</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Explore The World</h2>
          <h1 className="hero-heading">
            MAKE YOUR LIFE A MEMORABLE SYMPHONY OF TRAVEL
          </h1>
          <p className="hero-subtext">
            It’s time to elevate your travel out of the ordinary. Passionate
            about travel and tailor-made holidays, we use our in-depth knowledge
            to craft trips that push the boundaries beyond your imagination. We
            have hand-picked many breathtaking experiences for you, a preview of
            the curated journeys you will indulge in.
          </p>
          <button className="hero-button">Explore Our Trips</button>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="/images/traveller.png"
              alt="Traveler"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h3 className="about-title">About Us</h3>
            <h2 className="about-heading">
              Explore All Tour Of The World With Us.
            </h2>
            <p className="about-description">
              At Stanbrook Tourism, we know that luxury is personal. With over
              two decade's experience in arranging the finest luxury holidays,
              we go that extra mile to ensure that every detail is built around
              you. So, you can simply sit back, relax and trust us to take you
              there.
            </p>
            <p className="about-description">
              Privately owned by full-time, hands-on directors, backed up by a
              loyal and ...
            </p>
            <button className="about-button">Read More</button>
          </div>
        </div>
      </section>
      <section className="destinations-section">
        <h2 className="destinations-heading">We are Super Specialists</h2>
        <p className="destinations-subheading">
          Explore our top destinations lorem ipsum explore our top destinations
          <br />
          Explore our top destinations lorem ipsum explore our top destinations
        </p>
        <div className="destinations-grid">
          <DestinationCard
            image="/images/Rectangle 30.png"
            title="South Africa"
          />
          <DestinationCard image="/images/Rectangle 30.png" title="London" />
          <DestinationCard image="/images/Rectangle 30.png" title="India" />
          <DestinationCard image="/images/Rectangle 30.png" title="Greece" />
          <DestinationCard image="/images/Rectangle 30.png" title="America" />
          <DestinationCard image="/images/Rectangle 30.png" title="Italy" />
          <DestinationCard image="/images/Rectangle 30.png" title="Italy" />
          <DestinationCard image="/images/Rectangle 30.png" title="Italy" />
          <DestinationCard image="/images/Rectangle 30.png" title="Italy" />
        </div>
        <button className="destinations-read-more">Read More</button>
      </section>
    </div>
  );
}

export default App;
