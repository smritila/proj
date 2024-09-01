import React from "react";

import BaseSectionLayout from "./BaseSectionLayout";
import DestinationCardWithInfo from "./DestinationCardWithInfo";
import classes from "./ExperienceTrail.module.css";

import DestinationImage from "../assets/images/destination-1.png";

function ExperienceTrail() {
  const destinations = [
    {
      title: "India",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Singapore",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Malaysia",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "India",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Singapore",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    },
    {
      title: "Malaysia",
      image: DestinationImage,
      description:
        "At Stanbrook Tourism, we know that luxury is personal. With over two decade’s experience in arranging the finest luxury holidays, we go that extra mile to ensure that every detail is built around you. So, you can simply sit back, relax and trust us to take you there. Privately owned by full-time, hands-on directors, backed up by a loyal and experienced team, we have been creating domestic and worldwide holidays since 2003. We therefore have the know-how and the flexibility to adapt to these rapidly changing times, and so you can book with confidence, safe in the knowledge that if your plans have to change…they can!"
    }
  ];

  return (
    <BaseSectionLayout>
      <div className={classes.container__header}>
        <h2 className={classes["container__header-left"]}>
          Our Experience Trail
        </h2>
        <div className={classes["container__header-right"]}>
          <p>
            When designing your personalised holiday, we like to understand you
            as a person and what you want from your time away. Be it pure
            relaxation, a balance of culture, wildlife and beach or something a
            bit more adventurous - these are our ‘signature experiences’ and
            they are exclusive to us.
          </p>
          <div className={classes["button-container"]}>
            <button className="primary-button">Domestic</button>
            <button className="primary-button primary-button--outlined">
              International
            </button>
          </div>
        </div>
      </div>
      <div className={classes["card-container"]}>
        {destinations.map((destination, index) => (
          <DestinationCardWithInfo
            key={index}
            image={destination.image}
            title={destination.title}
            description={destination.description}
          />
        ))}
      </div>
      <button className="primary-button">View More</button>
    </BaseSectionLayout>
  );
}

export default ExperienceTrail;
