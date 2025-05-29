import React, { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddClick = () => {
    if (input.trim()) {
      setTasks((prev) => [
        ...prev,
        { text: input, completed: false, id: Date.now() },
      ]);
      setInput("");
    }
  };

  const handleCheck = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteClick = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6 bg-black text-white">
      <h1 className="font-bold text-2xl">ToDo List In React</h1>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter ToDo"
          className="px-4 py-1 border border-white rounded-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddClick}
          className="bg-gray-500 px-4 py-1 rounded-sm"
        >
          Add
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex gap-5 p-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(task.id)}
            />
            <h1 className={task.completed ? "line-through" : ""}>{task.text}</h1>
            <button
              onClick={() => handleDeleteClick(task.id)}
              className="bg-gray-500 px-4 py-1 rounded-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
