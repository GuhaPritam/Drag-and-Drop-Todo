import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';


const CreateTask = ({ tasks, setTasks }) => {
    const [createTask, setCreateTask] = useState({ id: '', name: '', status: 'todo' });
    console.log(tasks)

    const handelSubmit = (e) => {
        e.preventDefault();
        // Adding one alert
        if (createTask.name.length < 3)
            return toast.error("A task must have more than 3 characters");
        setTasks((prev) => {
            // Added preview array and createTask data in []
            const convertList = [...prev, createTask];
            localStorage.setItem("tasks", JSON.stringify(convertList));
            return convertList;
        });
    };

    return (
        <>
            <form onSubmit={handelSubmit}>
                <input onChange={(e) => setCreateTask({ ...createTask, id: uuidv4(), name: e.target.value })} value={createTask.name} type="text" className='border-2 border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1' />
                <button className='bg-cyan-500 rounded-md px-4 h-12 text-white'>Create</button>
            </form>
        </>
    )
}

CreateTask.propTypes = {
    tasks: PropTypes.any.isRequired,
    setTasks: PropTypes.any.isRequired
};

export default CreateTask;