import React from "react";
import NewsBlogCard from "./NewsBlogCard";
import "./NewsBlogsSection.css";

function NewsBlogsSection() {
  const blogs = [
    {
      image: "/images/Rectangle 32.png",
      category: "Allure Trails",
      title: "French Polynesia – Exotic land of colors and beaches",
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade's experience in arranging the finest luxury holidays, we go that extra mile to ensure every detail is built around you.",
    },
    {
      image: "/images/Rectangle 32.png",
      category: "Allure Trails",
      title: "French Polynesia – Exotic land of colors and beaches",
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade's experience in arranging the finest luxury holidays, we go that extra mile to ensure every detail is built around you.",
    },
  ];

  return (
    <section className="news-blogs-section">
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
    </section>
  );
}

export default NewsBlogsSection;
