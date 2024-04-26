import PropTypes from 'prop-types';
import Header from './Header';
import Task from './Task';
import { useDrop } from 'react-dnd';
import toast from "react-hot-toast";

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    let text = 'Todo';
    let bg = 'bg-slate-500';
    let tasksToMap = todos;

    if (status === 'inprogress') {
        text = 'In Progress'
        bg = 'bg-red-500'
        tasksToMap = inProgress
    }

    if (status === 'closed') {
        text = 'Closed'
        bg = 'bg-green-500'
        tasksToMap = closed
    }

    const addItemToSection = (id) => {
        setTasks((prev) => {
            const mTasks = prev.map((t) => {
                if (t.id === id) {
                    return { ...t, status: status };
                }
                return t;
            });
            localStorage.setItem('tasks', JSON.stringify(mTasks));
            toast("Task status changed")
            return mTasks;
        })
    }

    return (
        <>
            <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-slate-200' : ''}`}>
                <Header text={text} bg={bg} count={tasksToMap.length} />
                {tasksToMap.length > 0 && tasksToMap.map((task) => (
                    <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
                ))}
            </div>
        </>
    );
};

Section.propTypes = {
    status: PropTypes.any.isRequired,
    setTasks: PropTypes.any.isRequired,
    tasks: PropTypes.any.isRequired,
    todos: PropTypes.any.isRequired,
    inProgress: PropTypes.any.isRequired,
    closed: PropTypes.any.isRequired,
};

export default Section;