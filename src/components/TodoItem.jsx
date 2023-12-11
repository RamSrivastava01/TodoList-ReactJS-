import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="row rm-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4"> {todoDate} </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          key={todoName}
          onClick={() => deleteItem(todoName)}
        >
          <MdOutlineDeleteOutline className="svg" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
