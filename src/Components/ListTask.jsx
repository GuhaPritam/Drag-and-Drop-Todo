import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ListTask = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter((createTask) => createTask.status === 'todo');
        const fInProgress = tasks.filter((createTask) => createTask.status === 'inProgress');
        const fClosed = tasks.filter((createTask) => createTask.status === 'closed');

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);
    }, [tasks])

    return (
        <>
            <div>
                list
            </div>
        </>
    )
}

ListTask.propTypes = {
    tasks: PropTypes.any.isRequired,
    setTasks: PropTypes.any.isRequired
};

export default ListTask
