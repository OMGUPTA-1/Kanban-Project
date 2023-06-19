import React from "react";
import MessageEllipsis from "../../../../Icons/MessageEllipsis";
import Folder from "../../../../Icons/Folder";

const Card = ({ data, index, isDragging, className, ...props }) => {
  const avatarSize = 24;
  const avatarOffset = 4;
  const mapping = {
    0: {
      title: "Completed",
      surfaceClass: "bg-surface-success",
      fontClass: "text-font-success",
    },
    1: {
      title: "Low",
      surfaceClass: "bg-surface-warning",
      fontClass: "text-font-warning",
    },
    2: {
      title: "High",
      surfaceClass: "bg-surface-error",
      fontClass: "text-font-error",
    },
  };

  return (
    <div
      className={`bg-white rounded-2xl p-5 ${className}`}
      style={{
        transform: `rotate(${isDragging ? "3" : "0"}deg)`,
      }}
    >
      {/* Head */}
      <div className="flex justify-between items-center">
        <div className={`${mapping[data.priority].surfaceClass} rounded`}>
          <span
            className={`font-medium text-xs ${
              mapping[data.priority].fontClass
            }`}
            style={{ margin: "4px 6px" }}
          >
            {mapping[data.priority].title}
          </span>
        </div>
      </div>
      {/* Title */}
      <div className="mt-1 mb-0.5">
        <h1 className="font-semibold text-lg">{data.title}</h1>
      </div>
      {/* Content */}
      {data.content && (
        <div className="mt-1">
          <p className="font-normal text-xs text-font-light">{data.content}</p>
        </div>
      )}
      {/* Images */}
      {data.images && (
        <div
          className={`grid gap-3 mt-2`}
          style={{
            gridTemplateColumns: `repeat(${data.images.length}, 1fr)`,
          }}
        >
          {data.images.map((image, index) => (
            <img
              key={index}
              src={`/images/cards/${image}`}
              alt={index}
              className="w-full rounded-lg col-span-1"
            />
          ))}
        </div>
      )}
      {/* Foot */}
      <div className="flex flex-col items-start gap-3 xl:flex-row xl:justify-between xl:items-center mt-7">
        {/* People */}
        <div
          className="relative"
          style={{
            height: avatarSize,
            width:
              data.people.length * (avatarSize - avatarOffset) + avatarOffset,
          }}
        >
          {data.people.map(({ avatar }, index) => (
            <img
              key={index}
              src={`/images/person/${avatar}`}
              alt={avatar}
              className="w-6 h-6 absolute"
              style={{ right: (avatarSize - avatarOffset) * index }}
            />
          ))}
        </div>

        <div className="flex flex-col items-start lg:items-center lg:flex-row gap-4">
          {/* Comments */}
          <div className="flex items-center gap-1">
            <MessageEllipsis width="14" height="14" />
            <span className="font-medium text-xs text-font-light">
              {data["number_comments"]} comments
            </span>
          </div>

          {/* Files */}
          <div className="flex items-center gap-1">
            <Folder width="14" height="14" />
            <span className="font-medium text-xs text-font-light">
              {data["number_files"]} files
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
