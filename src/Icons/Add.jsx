import React from "react";
import SVG from "./SVG";

const Add = ({
  strokeColor = "stroke-font-light",
  boundary = "fill-transparent stroke-font-light",
  ...props
}) => {
  return (
    <SVG fill="none" viewBox="0 0 18 18" {...props}>
      <path
        d="M6 9H12"
        className={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12V6"
        className={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
        className={boundary}
        fillOpacity="0.2"
      />
    </SVG>
  );
};

export default Add;
