import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const titulo = title;
    console.log(titulo, descripcion);
    createTask({ titulo, descripcion });
    setTitle("");
    setDescripcion("");
    alert("tarea creada");
  };

  return (
    <div className="max-md mx-80">
      <form onSubmit={handleSubmit}  className="bg-slate-800 p-10">
      <input
        placeholder="escribe el nombre de la tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="p-3 w-full mb-2  text-black"
      />
      <textarea
        placeholder="escribe la descripcion de la tarea"
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        value={descripcion}
        className="p-3 w-full mb-2 text-black"
        
      ></textarea>
      <button className="text-xl font-bold bg-red-500 hover:bg-red-700 text-white py-2 px-2 rounded-md mt-4">Guardar</button>
    </form>

    </div>
  );
}

export default TaskForm;
