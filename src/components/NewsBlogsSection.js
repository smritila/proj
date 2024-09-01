import React from "react";

import BaseSectionLayout from "./BaseSectionLayout";
import NewsBlogCard from "./NewsBlogCard";
import "./NewsBlogsSection.css";

import StandingAtCliffImage from "../assets/images/standing-at-cliff.png";

function NewsBlogsSection() {
  const blogs = [
    {
      image: StandingAtCliffImage,
      category: "Allure Trails",
      title: "French Polynesia – Exotic land of colors and beaches",
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade's experience in arranging the finest luxury holidays, we go that extra mile to ensure every detail is built around you."
    },
    {
      image: StandingAtCliffImage,
      category: "Allure Trails",
      title: "French Polynesia – Exotic land of colors and beaches",
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade's experience in arranging the finest luxury holidays, we go that extra mile to ensure every detail is built around you."
    }
  ];

  return (
    <BaseSectionLayout>
      <h2 className="section-title">News & Blogs</h2>
      <div className="news-blogs-grid">
        {blogs.map((blog, index) => (
          <NewsBlogCard
            key={index}
            image={blog.image}
            category={blog.category}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
      <button className="primary-button" style={{ marginTop: "60px" }}>
        View All
      </button>
    </BaseSectionLayout>
  );
}

export default NewsBlogsSection;
