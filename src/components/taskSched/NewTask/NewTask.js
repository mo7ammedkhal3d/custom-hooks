import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../../hooks/use-http';

const NewTask = (props) => {

  const {isLoading,error, sendRequest: sendTaskRequest} = useHttp();

  const createTask = (taskData,taskText) =>{
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: 'https://react-http-e7d8f-default-rtdb.firebaseio.com/tasks.json',
      method: 'POST',
      body: JSON.stringify({ text: taskText }),
      headers: {'Content-Type': 'application/json'},
    },createTask.bind(null,taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
