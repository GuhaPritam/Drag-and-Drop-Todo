import { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import CreateTask from "./Components/CreateTask";
import ListTask from "./Components/ListTask";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Take all the data as {} from local storage
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Toaster />
        <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-3 pt-32 gap-16'>
          {/* Sending useState data by props */}
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
      </DndProvider>
    </>
  )
}

export default App
