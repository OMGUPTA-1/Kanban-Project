import React from "react";
import SVG from "./SVG";

const Filter = (props) => {
  return (
    <SVG width="15" height="15" viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M2.6 1H11.4C12.1333 1 12.7333 1.6 12.7333 2.33333V3.8C12.7333 4.33333 12.4 5 12.0667 5.33333L9.2 7.86667C8.8 8.2 8.53333 8.86667 8.53333 9.4V12.2667C8.53333 12.6667 8.26666 13.2 7.93333 13.4L7 14C6.13333 14.5333 4.93333 13.9333 4.93333 12.8667V9.33333C4.93333 8.86667 4.66666 8.26667 4.4 7.93333L1.86666 5.26667C1.53333 4.93333 1.26666 4.33333 1.26666 3.93333V2.4C1.26666 1.6 1.86666 1 2.6 1Z"
        className="stroke-font-light"
        strokeWidth="1.3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Filter;
