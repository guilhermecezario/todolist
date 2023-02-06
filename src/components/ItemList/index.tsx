import React from 'react';

import { Container } from './styles';

import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";

interface Task {
  id: string,
  description: string,
  finished: boolean,
}

interface ItemListProps {
  task: Task,
  onUpdated(task: Task): void, 
}

export default function ItemList({ task, onUpdated }: ItemListProps) {
  function handleUpdateFinished() {
    onUpdated({
      ...task,
      finished: !task.finished
    })
  }

  return (
    <Container>
      {task.finished ? (
        <MdCheckCircleOutline onClick={handleUpdateFinished}/>
      ) : (
        <MdRadioButtonUnchecked onClick={handleUpdateFinished}/>
      )}
      <p>{ task.description }</p>
    </Container>
  );
}