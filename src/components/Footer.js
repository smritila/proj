import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import backgroundmap from "../assets/images/background-map.png";
import standingperson from "../assets/images/standing-person.png";

function Footer() {
  const containerStyle = {
    backgroundImage: `url(${backgroundmap})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <footer className="footer" style={containerStyle}>
      <img
        src={standingperson}
        className="footer-image"
        alt="standing person"
      />
      <div className="footer-logo-section">
        <img
          src="/images/Group 921.png"
          alt="Stanbrook Tourism Logo"
          className="footer-logo"
        />

        <div className="footer-social-icons">
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="footer-social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      <div className="footer-links-section">
        <div className="footer-links-column">
          <h4 className="footer-links-heading">Important</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Destination List</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-links-heading">Quick Links</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#">Cruises</a>
            </li>
            <li>
              <a href="#">Mice & Weddings</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-links-heading">How to Partner</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#">Ultra Luxury Holidays</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-links-heading">Support</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#">User Reviews</a>
            </li>
            <li>
              <a href="#">Reach Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
