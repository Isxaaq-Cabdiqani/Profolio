import { useState } from "react";
import TodoList from "../Component/Todo_list";
import InputDisplay from "../Component/input_display";

function TodoApp() {
  const [task, setTask] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [date, setDate] = useState("");

  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(true);

  function addTask() {
    if (!task.trim()) return;
    if (!date) return;

    const newItem = { task, assignedTo, date };

    setList([...list, newItem]);

    setTask("");
    setAssignedTo("");
    setDate("");
  }

  function deleteTask(indexToDel) {
    const updList = list.filter((item, index) => index !== indexToDel);
    setList(updList);
  }

  const deadline = new Date().toISOString().split("T")[0];

  function checkDate() {
    if (deadline === date) return setChecked(false);
  }

  return (
    <>
      <div className="container_1" style={{ width: "500px" }}>
        <InputDisplay
          task={task}
          setTask={setTask}
          assignedTo={assignedTo}
          setAssignedTo={setAssignedTo}
          date={date}
          setDate={setDate}
          addTask={addTask}
        />
      </div>

      {/* <br /> */}
      <div className="container_2">
        {list.map((item, index) => (
          <TodoList
            key={index}
            task={item.task}
            assignedTo={item.assignedTo}
            date={item.date}
            deleteTask={() => deleteTask(index)}
            checked={item.date !== deadline}
          />
        ))}
      </div>
    </>
  );
}

export default TodoApp;
