import React from "react";
import SVG from "./SVG";

const Folder = (props) => {
  return (
    <SVG fill="none" width="16" height="16" viewBox="0 0 16 16" {...props}>
      <path
        d="M14.3334 7.33333V11.3333C14.3334 14 13.6667 14.6667 11.0001 14.6667H4.33341C1.66674 14.6667 1.00008 14 1.00008 11.3333V4.66666C1.00008 1.99999 1.66674 1.33333 4.33341 1.33333H5.33341C6.33341 1.33333 6.55341 1.62666 6.93341 2.13333L7.93341 3.46666C8.18674 3.79999 8.33341 3.99999 9.00008 3.99999H11.0001C13.6667 3.99999 14.3334 4.66666 14.3334 7.33333Z"
        className="stroke-font-light"
        strokeMiterlimit="10"
      />
      <path
        d="M5.33333 1.33333H11.3333C12.6667 1.33333 13.3333 1.99999 13.3333 3.33333V4.25333"
        className="stroke-font-light"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33333 10H6"
        className="stroke-font-light"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Folder;
