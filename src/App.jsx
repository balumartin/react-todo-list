import { useEffect, useState } from "react";
import "./style.css";
import NewTodoForm from "./components/NewTodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import { Toaster } from "react-hot-toast";
import { notify } from "./utils/notify.js";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const updatedTodos = [...todos, newTodo];

    setTodos(updatedTodos);
    notify.added();
  }

  function toggleTodo(id, completed) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }
      return todo;
    });

    setTodos(updatedTodos);

    if (completed) {
      notify.completed();
    } else {
      notify.uncompleted();
    }
  }

  function editTodo(id, title) {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, title };
      return todo;
    });
    setTodos(updateTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
    notify.deleted();
  }

  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#33658A",
            color: "#fff",
            borderRadius: "6px",
            border: "1px solid #2F4858",
          },
        }}
      />
      <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
