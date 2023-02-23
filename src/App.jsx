//rfce() es7 extension
import TaskList from "./components/TaskList";
import TaskForm from "./components/taskForm";

export function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="Container mx-24 text-white">
        <h1 style={{ fontSize: "25PX" }} className="text-xl font-bold pb-2 max-md mx-80">Agrega tus tareas</h1>
        <TaskForm />
        <h1 style={{ fontSize: "25PX" }} className="text-xl font-bold">Lista de Tareas</h1>
        <TaskList />
      </div>
    </main>
  );
}
