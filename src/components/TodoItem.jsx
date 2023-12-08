import { MdOutlineDeleteOutline } from "react-icons/md";

const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  // let = "Buy Milk";
  // let  = "4/06/2023";
  return (
    <div className="row rm-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4"> {todoDate} </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          key={todoName}
          onClick={() => onDeleteClick(todoName)}
        >
          <MdOutlineDeleteOutline className="svg" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
