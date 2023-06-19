import React from "react";
import Edit from "../../../Icons/Edit";
import Link from "../../../Icons/Link";
import Add from "../../../Icons/Add";

const Header = (props) => {
  const avatarSize = 38;
  const avatarOffset = 8;
  const people = [
    { avatar: "2.jpg" },
    { avatar: "3.jpg" },
    { avatar: "4.jpg" },
    { avatar: "5.jpg" },
    { avatar: "2.jpg" },
    { avatar: "3.jpg" },
  ];

  return (
    <div
      className={`flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-0 justify-between ${props.className}`}
      {...props}
    >
      <div className="flex items-center gap-5">
        <h1 className="text-font-primary font-semibold text-3xl md:text-5xl">
          Mobile App
        </h1>
        <div className="flex items-center gap-4">
          <Edit />
          <Link />
        </div>
      </div>

      <div className="flex items-center self-end">
        <Add
          width="18"
          height="18"
          color="stroke-main-primary"
          boundary="fill-main-primary"
        />
        <a href="/" className="text-main-primary ml-2 mr-3">
          Invite
        </a>
        <div
          style={{
            height: avatarSize,
            width:
              Math.min(people.length, 5) * (avatarSize - avatarOffset) +
              avatarOffset,
          }}
          className="relative"
        >
          {people.map(({ avatar }, index) =>
            index < 4 ? (
              <div
                key={index}
                style={{
                  width: avatarSize,
                  height: avatarSize,
                  left: (avatarSize - avatarOffset) * index,
                }}
                className="absolute"
              >
                <img
                  src={`/images/person/${avatar}`}
                  key={index}
                  alt={avatar}
                  className="w-full h-full"
                />
              </div>
            ) : null
          )}
          {people.length > 4 && (
            <div
              style={{
                width: avatarSize,
                height: avatarSize,
                background: "#F4D7DA",
                color: "#D25B68",
                left: 30 * 4,
              }}
              className="flex items-center justify-center rounded-full absolute border border-white"
            >
              <span className="font-medium" style={{ fontSize: 15 }}>
                +{people.length - 4}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
