import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // const initialTodoItems = [];

  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/06/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/06/2023",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,

        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length == 0 ? (
          <WelcomeMessage />
        ) : (
          <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
        )}
      </center>
    </>
  );
}

export default App;
