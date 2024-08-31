import React from "react";
import "./NewsBlogCard.css";

function NewsBlogCard({ image, category, title, description }) {
  return (
    <div className="news-blog-card">
      <img src={image} alt={title} className="news-blog-image" />
      <div className="news-blog-content">
        <h4 className="news-blog-category">{category}</h4>
        <h3 className="news-blog-title">{title}</h3>
        <p className="news-blog-description">{description}</p>
        <div className="news-blog-arrow">→</div>
      </div>
    </div>
  );
}

export default NewsBlogCard;
