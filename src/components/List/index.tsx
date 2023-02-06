import React from 'react';

import { Container } from './styles';

import ItemList from '../ItemList'

export interface Task {
  id: string,
  description: string,
  finished: boolean,
}

interface ListProps {
  tasks: Task[],
  onUpdated(task: Task): void
}

export default function List({ tasks, onUpdated }: ListProps) {
  return (
    <Container>
      {tasks.map((task) => (
        <ItemList task={task} onUpdated={onUpdated} key={task.id} />
      ))}
    </Container>
  );
}

List.defaultProps = {
  tasks: [],
  onUpdated: () => {
  },
}