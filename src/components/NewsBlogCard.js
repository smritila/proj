import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import classes from "./NewsBlogCard.module.css";

function NewsBlogCard({ image, category, title, description }) {
  const descriptionClassStr = [
    classes["news-blog-description"],
    "truncate"
  ].join(" ");
  return (
    <div className={classes["news-blog-card"]}>
      <img src={image} alt={title} className={classes["news-blog-image"]} />
      <div className={classes["news-blog-content"]}>
        <h4 className={classes["news-blog-category"]}>{category}</h4>
        <h3 className={classes["news-blog-title"]}>{title}</h3>
        <p className={descriptionClassStr}>{description}</p>
        <div className={classes["news-blog-arrow"]}>
          <FontAwesomeIcon
            size="lg"
            icon={faArrowAltCircleRight}
            style={{
              color: "#EE7C00",
              size: "xl",
              marginLeft: "auto",
              display: "block"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsBlogCard;
