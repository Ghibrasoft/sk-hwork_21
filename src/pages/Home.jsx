import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { BsCardChecklist } from "react-icons/bs";

const Home = () => {
  return (
    <section className="h-screen bg-slate-800 flex flex-col items-center">
      <header className="flex justify-between items-center my-10">
        <h1 className="flex items-end gap-3 text-5xl text-white">
          Todo App
          <span className="text-indigo-500">
            <BsCardChecklist size={40} />
          </span>
        </h1>
      </header>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default Home;
