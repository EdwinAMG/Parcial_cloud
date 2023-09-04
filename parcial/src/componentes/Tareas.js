import React, { useState } from "react";
import "./Tareas.css";
import { API, Auth } from "aws-amplify";

function Tareas() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };
  /*const handleAddTaskAndCallApi = () => {
    addTask(); // Llama a la función addTask
    callApi(); // Llama a la función callApi
  };*/

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        className="task-input"
        placeholder="Agregar nueva tarea"
        value={taskText}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Agregar</button>
    </div>
  );
}

export default Tareas;
