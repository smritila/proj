import React from "react";

import classes from "./ExperienceTrail.module.css";

function ExperienceTrail() {
  return (
    <section className={classes.shell}>
      <div className={classes.container}>
        <div className={classes.container__header}>
          <h2 className={classes["container__header-left"]}>
            Our Experience Trail
          </h2>
          <p className={classes["container__header-right"]}>
            When designing your personalised holiday, we like to understand you
            as a person and what you want from your time away. Be it pure
            relaxation, a balance of culture, wildlife and beach or something a
            bit more adventurous - these are our ‘signature experiences’ and
            they are exclusive to us.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTrail;
