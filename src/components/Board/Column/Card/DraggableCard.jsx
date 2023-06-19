import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Card from "./Card";

const DraggableCard = ({
  draggableId,
  index,
  children,
  className,
  data,
  ...props
}) => {
  return (
    <Draggable draggableId={draggableId} key={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={className}
          {...props}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            key={draggableId}
            index={index}
            data={data}
            isDragging={snapshot.isDragging}
          />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableCard;
