import { useContext, useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  //state variables

  //useRef variables
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <form onSubmit={handleAddButtonClicked}>
      <div className="container">
        <div className="row rm-row">
          <div className="col-6">
            <input
              ref={todoNameElement}
              type="text"
              placeholder="Enter your task"
            />
          </div>
          <div className="col-4">
            <input ref={dueDateElement} type="date" />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success addBtn">
              <IoAddCircleOutline className="svg" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
