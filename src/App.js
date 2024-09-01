import React from "react";
import "./App.css";

import TheHero from "./components/TheHero";
import SuperSpeciaLists from "./components/SuperSpecialists";
import DestinationCarousel from "./components/DestinationCarousel";
import NewsBlogsSection from "./components/NewsBlogsSection";
import NewsletterAndSupport from "./components/NewsletterAndSupport";
import Footer from "./components/Footer";
import ExperienceTrail from "./components/ExperienceTrail";

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

      <TheHero />

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
            <button className="primary-button">Read More</button>
          </div>
        </div>
      </section>

      <SuperSpeciaLists />

      <DestinationCarousel />

      <ExperienceTrail />

      <NewsBlogsSection />

      <NewsletterAndSupport />

      <Footer />
    </div>
  );
}

export default App;
