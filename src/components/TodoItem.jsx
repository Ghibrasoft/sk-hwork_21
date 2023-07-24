import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import { BsXLg } from "react-icons/bs";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="text-white flex items-center justify-between">
      <div class="w-full flex items-center justify-between px-4 py-2 border border-slate-500 rounded hover:border-slate-300 transition ease-in-out">
        <div className="flex items-center gap-1">
          <input
            id={todo.id}
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
            className="cursor-pointer peer w-5 h-5 text-indigo-500 bg-gray-100 border-gray-300 rounded"
          />
          <label
            htmlFor={todo.id}
            className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
          >
            {todo.text}
          </label>
        </div>

        <button
          onClick={handleDelete}
          className="hover:text-red-500 transition-colors"
        >
          <BsXLg size={20} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
