import React from "react";
import SVG from "./SVG";

const Pause = ({ fillClass, strokeClass, ...props }) => {
  return (
    <SVG viewBox="0 0 19 19" fill="none" {...props}>
      <path
        d="M15.925 11.125L4.075 11.125C2.95 11.125 2.5 11.6 2.5 12.8L2.5 15.825C2.5 17.025 2.95 17.5 4.075 17.5L15.925 17.5C17.05 17.5 17.5 17.025 17.5 15.825L17.5 12.8C17.5 11.6 17.05 11.125 15.925 11.125Z"
        className={`${fillClass} ${strokeClass}`}
      />
      <path
        d="M15.925 2.5L4.075 2.5C2.95 2.5 2.5 2.975 2.5 4.175L2.5 7.2C2.5 8.39167 2.95 8.875 4.075 8.875L15.925 8.875C17.05 8.875 17.5 8.4 17.5 7.2L17.5 4.175C17.5 2.975 17.05 2.5 15.925 2.5Z"
        className={`${fillClass} ${strokeClass}`}
      />
    </SVG>
  );
};

export default Pause;
