import PropTypes from 'prop-types';
import Header from './Header';
import Task from './Task';

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
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

    return (
        <>
            <div className={`w-64`}>
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