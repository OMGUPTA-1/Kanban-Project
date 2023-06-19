import React from "react";
import DownArrow from "../../Icons/DownArrow";

const Button = ({ children, icon, dropdown, ...props }) => {
  const Icon = icon;

  return (
    <button
      className={`${props.className} flex items-center rounded-md border border-font-light py-2 px-4`}
      {...props}
    >
      {Icon && <Icon className="mr-2" width="16" height="16" />}
      <span className="text-font-light font-medium text-base">{children}</span>
      {dropdown && <DownArrow fill="fill-font-light" className="ml-3" />}
    </button>
  );
};

export default Button;
