import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({ onNewItem, onDeleteClick }) => {
  const { todoItems } = useContext(TodoItemsContext);

  // console.log(todoItemsFromContext);

  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem
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
