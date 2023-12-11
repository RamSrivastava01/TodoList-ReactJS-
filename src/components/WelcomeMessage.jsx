import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <center>
      {todoItems.length == 0 && (
        <p className="welcomeMessage">Enjoy your day</p>
      )}
    </center>
  );
}

export default WelcomeMessage;
