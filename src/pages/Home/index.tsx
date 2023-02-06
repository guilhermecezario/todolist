import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Form from "../../components/Form";
import List from "../../components/List";

import { api } from "../../services/api";

export interface Task {
  id: string;
  description: string;
  finished: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function fetchTasks() {
    const response = await api.get<Task[]>("/tasks");

    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function handleUpdateTask(task: Task) {
    const response = await api.patch<Task>(`/tasks/${task.id}`, task);

    setTasks(tasks.map((t) => (t.id !== task.id ? t : response.data)));
  }

  async function handleSubmit(task: Task) {
    const response = await api.post<Task>("/tasks", task);

    setTasks([...tasks, response.data]);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List tasks={tasks} onUpdated={handleUpdateTask} />
    </Container>
  );
}
