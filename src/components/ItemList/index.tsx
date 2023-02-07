import React, { ChangeEvent, useState } from "react";

import { Container, Button } from "./styles";

import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";

export interface Task {
  id: string;
  description: string;
  finished: boolean;
}

interface ItemListProps {
  task: Task;
  onUpdated(task: Task): void;
}

export default function ItemList({ task, onUpdated }: ItemListProps) {
  const [description, setDescription] = useState(task.description);

  function handleUpdateFinished() {
    onUpdated({
      ...task,
      finished: !task.finished,
    });
  }

  function handleUpdateDescription() {
    if (!description) {
      setDescription(task.description);

      return;
    }

    onUpdated({
      ...task,
      description,
    });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <Container>
      <Button onClick={handleUpdateFinished}>
        {task.finished ? (
          <MdCheckCircleOutline size={25} color="#94A3B8" />
        ) : (
          <MdRadioButtonUnchecked size={25} color="#656F7D" />
        )}
      </Button>

      {task.finished ? (
        <p>{description}</p>
      ) : (
        <input
          type="text"
          value={description}
          onChange={handleChange}
          id={task.id}
          onBlur={handleUpdateDescription}
        />
      )}
    </Container>
  );
}

ItemList.defaultProps = {
  onUpdated: () => {
    // return empty
  },
};
