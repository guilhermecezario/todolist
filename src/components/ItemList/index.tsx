import React, { ChangeEvent, useState } from 'react';

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
  const [description, setDescription] = useState(task.description) 

  function handleUpdateFinished() {
    onUpdated({
      ...task,
      finished: !task.finished
    })
  }

  function handleUpdateDescription() {
    onUpdated({
      ...task,
      description
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <Container>
      {task.finished ? (
        <MdCheckCircleOutline onClick={handleUpdateFinished}/>
      ) : (
        <MdRadioButtonUnchecked onClick={handleUpdateFinished}/>
      )}

      <input
        type="text"
        value={description}
        onChange={handleChange}
        id={task.id}
        onBlur={handleUpdateDescription}
      />
    </Container>
  );
}