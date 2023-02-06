import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Container, Input, Button } from './styles';

interface Task {
  id?: string, 
  description: string,
  finished: boolean,
}

interface FormProps {
  onSubmit(task: Task): void, 
}

export default function Form({ onSubmit }: FormProps) {
  const [description, setDescription] = useState("") 

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onSubmit({
      description,
      finished: false,
    })
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Descreva a nova tarefa"
        value={description}
        onChange={handleChange}
        required
      />

      <Button type="submit">Adicionar</Button>
    </Container>
  );
}