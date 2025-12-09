import React, { useState } from "react";

function InputDisplay({
  task,
  setTask,
  assignedTo,
  setAssignedTo,
  date,
  setDate,
  addTask,
}) {
  return (
    <div>
      <label>Task</label> <br />
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Exter task"
      />
      <br />
      <label>Name</label>
      <br />
      <input
        type="text"
        onChange={(e) => setAssignedTo(e.target.value)}
        value={assignedTo}
        placeholder="Enter the name"
      />
      <br />
      <label>Date due</label>
      <br />
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        placeholder="Enter the date due on"
      />
      <br />
      <br />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default InputDisplay;
