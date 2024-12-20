import { Fragment } from 'react';
import NewTask from './NewTask/NewTask';
import Tasks from './Tasks/Tasks';

const TaskSched = () =>{
    return (
        <Fragment>
            <NewTask/>
            <Tasks/>
        </Fragment>
    );
}

export default TaskSched;