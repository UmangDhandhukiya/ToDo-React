import React, { useState } from "react";

const App = () => {
  const [Task, SetTask] = useState([]);
  const [search, SetSearch] = useState("");

  function handleAddClick() {
    SetTask((pre) => [...pre, search]);
    SetSearch("");
  }

   function handleDeleteClick(index) {
    const filterData = Task.filter((value,i) => i != index)
    SetTask(filterData)
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-6 bg-black text-white">
      <h1 className="font-bold text-2xl">ToDo List In React</h1>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter ToDo"
          className="px-4 py-1 border border-white rounded-sm"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
        />
        <button
          onClick={handleAddClick}
          className="bg-gray-500 px-4 py-1 rounded-sm"
        >
          Add
        </button>
      </div>

      <div>
        {Task.map((task, index) => (
          <div key={index} className="flex gap-5 p-2">
            <h1 className="text-lg font-bold">{task}</h1>
            <button onClick={() => {handleDeleteClick(index)}} className="bg-gray-500 px-4 py-1 rounded-sm">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
