import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "✏️No todos, please add a new task."}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
