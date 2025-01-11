import { Fragment,useState,useEffect, useCallback } from 'react';
import NewTask from './NewTask/NewTask';
import Tasks from './Tasks/Tasks';
import useHttp from '../../hooks/use-http';

const TaskSched = () =>{
    const [tasks, setTasks] = useState([]);
    
    const {isLoading, error, sendRequest: fetchTasks} = useHttp();
    
    useEffect(() => {

      const transformTasks = taskObject =>{
        const loadedTasks = [];
  
        for (const taskKey in taskObject) {
          loadedTasks.push({ id: taskKey, text: taskObject[taskKey].text });
        }
        setTasks(loadedTasks);
    };

      fetchTasks({url: 'https://react-http-e7d8f-default-rtdb.firebaseio.com/tasks.json'},transformTasks);

    }, [fetchTasks]);
  
    const taskAddHandler = (task) => {
      setTasks((prevTasks) => prevTasks.concat(task));
    };
  
    return (
      <Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </Fragment>
    );
}

export default TaskSched;