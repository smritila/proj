import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-section">
        <img
          src="/images/Group 921.png"
          alt="Stanbrook Tourism Logo"
          className="footer-logo"
        />
        <p className="footer-tagline">Passion...People...Places</p>
        <div className="footer-social-icons">
          <a href="#" className="footer-social-icon">
            <FacebookIcon />
          </a>
          <a href="#" className="footer-social-icon">
            <TwitterIcon />
          </a>
          <a href="#" className="footer-social-icon">
            <InstagramIcon />
          </a>
          <a href="#" className="footer-social-icon">
            <YouTubeIcon />
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
