import toast from "react-hot-toast";

export const notify = {
  added: () => toast.success("Todo added"),
  updated: () => toast("Todo updated"),
  deleted: () => toast.error("Todo deleted"),
  completed: () => toast.success("Todo completed"),
  uncompleted: () => toast("Todo marked as active"),
  error: () => toast.error("Please write a task")
};