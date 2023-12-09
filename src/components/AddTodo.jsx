import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName != "") {
      onNewItem(todoName, dueDate);
    }
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="row rm-row">
      <div className="col-6">
        <input
          value={todoName}
          type="text"
          placeholder="Enter your task"
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButtonClicked}
        >
          <IoAddCircleOutline className="svg" disabled />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
