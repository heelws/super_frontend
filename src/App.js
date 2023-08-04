//app.js
import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  //applyData : fetch url을 통해 받아온 data를 setTasks를 통해서 useState 배열에 넣어주는 역할
  const {
    isLoading,
    error,
    sendRequest: fetchTasks, //useHttp에서 return한 함수는 sendRequest, App 컴포넌트에서는 fetchTasks이기 때문에 재명령
  } = useHttp({
    url: "https://react-test-63a0e-default-rtdb.firebaseio.com/tasks.json",
    transformTasks,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
