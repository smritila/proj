import React from "react";
import "./NewsletterAndSupport.css";

function NewsletterAndSupport() {
  return (
    <section className="newsletter-support-section">
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Sign up for our newsletter</h2>
        <p className="newsletter-subheading">
          All of our experiences are small scale, authentic, personal
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="newsletter-input"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>

      <div className="support-container">
        <img
          src="/images/Group 845.png"
          alt="Customer Support"
          className="support-image"
        />
        <h3 className="support-heading">24/7 Customer Support</h3>
        <p className="support-description">
          At Stanbrook Tourism, we know that luxury is personal. With over two
          decades' experience in...
        </p>
        <button className="support-button">Chat Now</button>
      </div>
    </section>
  );
}

export default NewsletterAndSupport;
