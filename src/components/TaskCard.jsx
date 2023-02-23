import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  function mostrarAlerta() {
    deleteTask(task.id);
    alert(task.id);
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <ul>
        <li>
          <p
            className="text-xl font-bold capitalize p-1"
          >
            <a href="https://www.google.com">{task.titulo}</a>
          </p>
          <p>{task.descripcion} </p>
          <p className="text-center mt-auto">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-md mt-4"
              onClick={() => {
                mostrarAlerta();
              }}
            >
              Eliminar
            </button>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default TaskCard;
