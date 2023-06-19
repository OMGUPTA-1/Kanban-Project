import React, { useState } from "react";
import Add from "../../../Icons/Add";
import Card from "./Card/Card";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./Card/DraggableCard";

const Column = ({ data, index, placeholder, className, ...props }) => {
  return (
    <div
      className={`${className}`}
      {...props}
      style={{
        minWidth: 250,
      }}
    >
      <div className="bg-surface-card rounded-2xl p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full ${data.bgClass}`} />
            <h1 className="text-font-primary font-medium text-base ml-2">
              {data.title}
            </h1>
            <div className="flex items-center justify-center bg-misc-6 w-5 h-5 rounded-full ml-3">
              <span className="font-medium text-xs text-misc-5">
                {data.cards.length}
              </span>
            </div>
          </div>
          {data.add && (
            <div>
              <Add
                width="20"
                height="20"
                color="stroke-main-primary"
                boundary="fill-main-primary"
              />
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          style={{ borderWidth: 3 }}
          className={`w-full mt-5 ${data.borderClass}`}
        />

        {/* Cards */}
        <Droppable droppableId={data.id}>
          {(provided, snapshot) => (
            <div
              className="flex flex-col my-2 relative"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.cards.map((card, index) => (
                <DraggableCard
                  key={card.id}
                  draggableId={card.id}
                  index={index}
                  data={card}
                  className={"mt-5"}
                />
              ))}
              {provided.placeholder}
              {placeholder && snapshot.isDraggingOver && (
                <div
                  className="absolute bg-surface-card-dragged-background rounded-2xl border border-dashed border-dragged-boundary"
                  style={{
                    top: placeholder.top,
                    width: placeholder.width,
                    height: placeholder.height,
                  }}
                />
              )}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Column;
