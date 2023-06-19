import React, { useState } from "react";
import Header from "./Header";
import Options from "./Options";
import Column from "./Column";
import TodoCards from "../../data/todo.json";
import ProgressCards from "../../data/progress.json";
import DoneCards from "../../data/done.json";
import { DragDropContext } from "react-beautiful-dnd";

const Board = (props) => {
  const [placeholder, setPlaceholder] = useState(null);
  const [columns, setColumns] = useState([
    {
      id: "1",
      title: "To Do",
      borderClass: "border-main-primary",
      bgClass: "bg-main-primary",
      add: true,
      cards: TodoCards,
    },
    {
      id: "2",
      title: "On Progress",
      borderClass: "border-misc-2",
      bgClass: "bg-misc-2",
      cards: ProgressCards,
    },
    {
      id: "3",
      title: "Done",
      borderClass: "border-misc-4",
      bgClass: "bg-misc-4",
      cards: DoneCards,
    },
  ]);

  const getCardFromId = (id) => {
    let card = null;
    if (!id) return card;
    for (let i = 0; i < columns.length; i++) {
      card = columns[i].cards.find((c) => c.id === id);
      if (card) break;
    }
    return card;
  };

  // Handle Dragging End
  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    setPlaceholder(null);

    if (
      !destination ||
      !destination.droppableId ||
      (source.droppableId === destination.droppableId &&
        source.index === destination.index)
    )
      return;

    // Get the card
    const card = getCardFromId(draggableId);

    // Remove the card from source
    const sourceColumnIndex = Number(source.droppableId) - 1;
    setColumns((prev) => {
      const temp = [...prev];
      const cardIndex = temp[sourceColumnIndex].cards.findIndex(
        (c) => c.id === draggableId
      );
      temp[sourceColumnIndex].cards.splice(cardIndex, 1);
      return temp;
    });

    // Add the card to destination
    const destinationColumnIndex = Number(destination.droppableId) - 1;
    setColumns((prev) => {
      const temp = [...prev];
      temp[destinationColumnIndex].cards.splice(destination.index, 0, card);
      return temp;
    });
  };

  // Handle Dragging Start
  const handleDragStart = (result) => {
    const { draggableId, source } = result;

    if (!draggableId || !source) return;

    const { droppableId, index } = source;

    const draggableElement = document.querySelector(
      `[data-rbd-draggable-id="${draggableId}"]`
    );

    const droppableElement = document.querySelector(
      `[data-rbd-droppable-id="${droppableId}"]`
    );

    if (!draggableElement || !droppableElement) return;

    const width = draggableElement.clientWidth;
    const height = draggableElement.clientHeight;
    let top = 20;

    const children = droppableElement.children;
    for (let i = 0; i < index; i++) {
      const child = children[i];
      top += child.clientHeight + 20;
    }

    setPlaceholder({ top, width, height });
  };

  // Handle Dragging Update
  const handleDragUpdate = (result) => {
    setPlaceholder(null);

    const { draggableId, destination } = result;

    if (!draggableId || !destination) return;

    const { droppableId, index } = destination;

    const draggableElement = document.querySelector(
      `[data-rbd-draggable-id="${draggableId}"]`
    );

    const droppableElement = document.querySelector(
      `[data-rbd-droppable-id="${droppableId}"]`
    );

    if (!draggableElement || !droppableElement) return;

    const width = draggableElement.clientWidth;
    const height = draggableElement.clientHeight;
    let top = 20;

    const children = droppableElement.children;

    let draggableIndex = -1;
    for (let i = 0; i < children.length; i++) {
      if (children[i] === draggableElement) {
        draggableIndex = i;
        break;
      }
    }

    let limit = draggableIndex < index ? index + 1 : index;
    if (draggableIndex === -1) limit = index;
    for (let i = 0; i < limit; i++) {
      const child = children[i];
      if (i === draggableIndex) continue;
      top += child.clientHeight + 20;
    }

    setPlaceholder({ top, width, height });
  };

  return (
    <div {...props}>
      <Header />
      <Options className="mt-10" />
      <DragDropContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <div className="flex flex-row xl:grid xl:grid-cols-3 mt-11 gap-4 overflow-x-auto">
          {columns.map((column, index) => (
            <Column
              key={column.id}
              index={index}
              data={column}
              placeholder={placeholder}
            />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
