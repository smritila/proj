import React from "react";
import "./NewsBlogCard.css";
import BaseSectionLayout from "./BaseSectionLayout";

function NewsBlogCard({ image, category, title, description }) {
  return (
    <BaseSectionLayout>
      <img src={image} alt={title} className="news-blog-image" />
      <div className="news-blog-content">
        <h4 className="news-blog-category">{category}</h4>
        <h3 className="news-blog-title">{title}</h3>
        <p className="news-blog-description">{description}</p>
        <div className="news-blog-arrow">→</div>
      </div>
    </BaseSectionLayout>
  );
}

export default NewsBlogCard;
