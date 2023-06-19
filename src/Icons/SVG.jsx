import React from "react";

const SVG = ({ children, ...props }) => {
  const { width = 24, height = 24 } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default SVG;
