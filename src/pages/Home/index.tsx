import React, { useState } from 'react';

import { Container } from './styles';

import Form from '../../components/Form'
import List from '../../components/List'

interface Task {
  id: string,
  description: string,
  finished: boolean,
}

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      description: "Dormir cedo",
      finished: false,
    },
    {
      id: "2",
      description: "Dormir cedo",
      finished: false,
    },
    {
      id: "3",
      description: "Dormir cedo",
      finished: false,
    },
  ])

  function handleUpdateTask(task: Task) {
    setTasks(tasks.map((t) => t.id !== task.id ? t : task))
  }

  function handleSubmit(task: Task) {
    task.id = String(Math.floor(Math.random() * 1000))
    setTasks([...tasks, task])
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} onUpdated={handleUpdateTask}/>
    </Container>
  );
}