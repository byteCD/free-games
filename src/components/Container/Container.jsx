import React from "react";
import "./Container.css";

const Container = ({ children, maxWidth, className, padding, ...props }) => {
  const classes = className ? `Container ${className}` : "Container";

  return (
    <div className={classes} {...props} style={{ maxWidth, padding }}>
      {children}
    </div>
  );
};

export default Container;
