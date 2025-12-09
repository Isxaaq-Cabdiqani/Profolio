import React, { useState } from "react";

function TodoList({ task, assignedTo, date, deleteTask, checked }) {
  return (
    <div className="mini_container">
      <p>Task: {task}</p>
      <p>Assigned to: {assignedTo}</p>
      <p>Due on: {date}</p>
      {checked && (
        <div className="button_2">
          <button onClick={deleteTask}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
