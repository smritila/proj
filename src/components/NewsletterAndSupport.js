import React from "react";

import BaseSectionLayout from "./BaseSectionLayout";

import "./NewsletterAndSupport.css";

function NewsletterAndSupport() {
  return (
    <BaseSectionLayout wrapperClass="newsletter-support-section">
      <div className="wrapper-container">
        <div className="newsletter-container">
          <div>
            <h2 className="newsletter-heading">Sign up for our newsletter</h2>
            <p className="newsletter-subheading">
              All of our experiences are small scale, authentic, personal
            </p>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="newsletter-input"
            />
            <button
              className="primary-button"
              style={{
                display: "inline-block",
                marginTop: "20px",
                alignSelf: "flex-end"
              }}
            >
              Subscribe
            </button>
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
          <button className="primary-button">Chat Now</button>
        </div>
      </div>
    </BaseSectionLayout>
  );
}

export default NewsletterAndSupport;
