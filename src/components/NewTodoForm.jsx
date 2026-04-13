import { useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { notify } from "../utils/notify";

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return notify.error();
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <h2>Add New Task</h2>
      <div className="form-row">
        <label htmlFor="item">
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </label>
        <button className="btn btn-add">
          <FaRegPlusSquare size={22} />
        </button>
      </div>
    </form>
  );
}
