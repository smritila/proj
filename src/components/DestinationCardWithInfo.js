import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

import classes from "./DestinationCardWithInfo.module.css";

function DestinationCardWithInfo({ image, title, description }) {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div className={classes["card"]} style={containerStyle}>
      <div className={classes["card-content"]}>
        <div className={classes["card-container"]}>
          <div className={classes["card-container-header"]}>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10px", color: "#EE7C00" }}
            />
            <h3 className={classes["card-title"]}>{title}</h3>
          </div>
          <p className={[classes["description"], "truncate"].join(" ")}>
            {description}
          </p>
          <div className={classes["footer"]}>
            <FontAwesomeIcon
              size="lg"
              icon={faArrowAltCircleRight}
              style={{ color: "#EE7C00", marginLeft: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCardWithInfo;
