import React from "react";
import Search from "../../Icons/Search";
import Calendar from "../../Icons/Calendar";
import Message from "../../Icons/Message";
import Notification from "../../Icons/Notification";
import DownArrow from "../../Icons/DownArrow";
import Avatar from "../Avatar";
import Brand from "../Brand";

const Navbar = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-row border-b border-b-main-divider items-center`}
    >
      {/* Brand */}
      <Brand className="visible xl:hidden" style={{ padding: 0 }} />

      {/* Search */}
      <div className="hidden xl:flex gap-5 bg-surface-card px-4 py-3 rounded-xl w-full max-w-md md:visible">
        <Search />
        <input
          type="text"
          placeholder="Search for anything..."
          className="bg-transparent outline-none w-full text-sm font-normal"
        />
      </div>

      <div className="flex-grow" />

      <div className="flex items-center">
        {/* Icons */}
        <div className="flex flex-row gap-6">
          <Calendar />
          <Message />
          <Notification />
        </div>

        {/* Profile */}
        <div className="ml-5 sm:ml-12 flex flex-row items-center">
          <div className="ml-4 flex-col items-end hidden sm:flex">
            <span className="text-font-primary text-base font-normal">
              Anima Agrawal
            </span>
            <span className="text-font-light text-sm font-normal">
              U.P, India
            </span>
          </div>
          <Avatar
            src="/images/person/1.jpg"
            alt="Profile picture"
            className="mr-2"
          />
          <DownArrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
