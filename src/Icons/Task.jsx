import React from "react";
import SVG from "./SVG";

const Task = (props) => {
  return (
    <SVG fill="none" {...props}>
      <path
        d="M12.37 8.88H17.62"
        className="stroke-font-light"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38 8.88L7.13 9.63L9.38 7.38"
        className="stroke-font-light"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.37 15.88H17.62"
        className="stroke-font-light"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.38 15.88L7.13 16.63L9.38 14.38"
        className="stroke-font-light"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        className="stroke-font-light"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Task;
