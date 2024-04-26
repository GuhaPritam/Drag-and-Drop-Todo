import PropTypes from 'prop-types';
import toast from "react-hot-toast";

const Task = ({ task, tasks, setTasks }) => {
    const handelRemove = (id) => {
        const fTasks = tasks.filter((t) => t.id !== id);
        localStorage.setItem('tasks', JSON.stringify(fTasks));
        setTasks(fTasks);
        toast("Task Removed", { icon: '💀' })
    }

    return (
        <>
            <div className={`relative p-4 mt-8 shadow-md cursor-grab`}>
                <p>{task.name}</p>
                <button className='absolute bottom-1 right-1 text-slate-400' onClick={() => handelRemove(task.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </>
    );
};

Task.propTypes = {
    task: PropTypes.any.isRequired,
    setTasks: PropTypes.any.isRequired,
    tasks: PropTypes.any.isRequired,
}

export default Task;
