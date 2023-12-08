import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onNewItem, onDeleteClick }) => {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
            onDeleteClick={onDeleteClick}
            onClick={onNewItem}
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
