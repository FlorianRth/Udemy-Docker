import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(function () {
    fetch(`/api/tasks`, {
      headers: {
        authorization: "Bearer abc",
      },
    })
      .then(function (response) {
        console.log(response.json());
        console.log(JSON.parse(response));
        return response.json();
      })
      .then(function (jsonData) {
        setTasks(jsonData.tasks);
      });
  }, []);

  useEffect(
    function () {
      fetchTasks();
    },
    [fetchTasks]
  );

  function addTaskHandler(task) {
    console.log(process.env.TASK_SERVICE_SERVICE_HOST);
    fetch(`/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer abc",
      },
      body: JSON.stringify(task),
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (resData) {
        console.log(resData);
      });
  }

  return (
    <div className="App">
      <section>
        <NewTask onAddTask={addTaskHandler} />
      </section>
      <section>
        <button onClick={fetchTasks}>Fetch Tasks</button>
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
