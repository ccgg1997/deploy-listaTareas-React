import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="my-20">
        <h1 className="text-4xl text-white font-bold text-center"> No hay tareas</h1>
      </div>
    );
  }
  
  return (
    <div className= {"grid grid-cols-3 gap-2 p-4 rounded-md"}>
      {tasks.map((task, i) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
