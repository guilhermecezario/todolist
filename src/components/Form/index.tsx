import React from 'react';

import { Form, Input, Button } from './styles';

export default function Home() {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Descreva a nova tarefa"
      />

      <Button type="submit">Adicionar</Button>
    </Form>
  );
}