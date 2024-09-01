import React from "react";

import classes from "./BaseSectionLayout.module.css";

function BaseSectionLayout({ children, wrapperClass }) {
  return (
    <section className={[classes.shell, wrapperClass].join(" ")}>
      <div className={classes.container}>{children}</div>
    </section>
  );
}

export default BaseSectionLayout;
