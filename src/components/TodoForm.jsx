import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { BsRocketTakeoff } from "react-icons/bs";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 mt-10">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo..."
        className="px-4 py-2 rounded-lg outline-none ring-indigo-500 focus:ring-2"
      />
      <button
        type="submit"
        className="flex items-center gap-1 bg-indigo-500 text-white px-4 py-2 ring-2 ring-indigo-500 rounded-lg hover:ring-indigo-700 hover:ring-offset-2 hover:bg-indigo-700 active:ring-offset-1 transition ease-in-out"
      >
        Add
        <span className="">
          <BsRocketTakeoff size={20} />
        </span>
      </button>
    </form>
  );
};

export default TodoForm;
