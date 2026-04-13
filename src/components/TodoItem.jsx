import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

export default function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  editTodo,
  deleteTodo,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [editing, setEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    editTodo(id, newTitle);
    setEditing(false);
    toast.success("Todo updated");
  }

  return (
    <li className={completed ? "completed" : ""}>
      {editing ? (
        <form className="edit-form" onSubmit={handleSubmit}>
          <label className="edit-label" htmlFor="name">
            <input
              className="edit-input"
              type="text"
              value={newTitle}
              id="name"
              maxLength={25}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              <FaRegSave />
            </button>
          </label>
        </form>
      ) : (
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span>{title}</span>
        </label>
      )}
      {!editing && (
        <button onClick={() => setEditing(true)} className="btn btn-warning">
          <FaEdit />
        </button>
      )}

      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
