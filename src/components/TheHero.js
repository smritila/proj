import React from "react";

import HeroBackgroundImage from "../assets/images/mountain-with-lake.jpg";

function TheHero() {
  const containerStyle = {
    backgroundImage: `url(${HeroBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <section className="hero-section" style={containerStyle}>
      <div className="hero-content">
        <h2 className="hero-title">Explore The World</h2>
        <h1 className="hero-heading">
          MAKE YOUR LIFE A MEMORABLE SYMPHONY OF TRAVEL
        </h1>
        <p className="hero-subtext">
          It’s time to elevate your travel out of the ordinary. Passionate about
          travel and tailor-made holidays, we use our in-depth knowledge to
          craft trips that push the boundaries beyond your imagination. We have
          hand-picked many breathtaking experiences for you, a preview of the
          curated journeys you will indulge in.
        </p>
        <button className="hero-button">Explore Our Trips</button>
      </div>
    </section>
  );
}

export default TheHero;
