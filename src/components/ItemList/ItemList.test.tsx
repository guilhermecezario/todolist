import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import ItemList, { Task } from ".";

const task: Task = {
  id: '1',
  description: "task test",
  finished: false
}

describe('ItemList', () => {
  test('should render task', () => {
    const { container } = render(<ItemList task={task} />);

    expect(container).toBeInTheDocument();
    expect(screen.getByDisplayValue(task.description)).toBeInTheDocument();
  });

  test('should emit onUpdated event when updating finished', () => {
    const onUpdated = jest.fn();

    render(<ItemList task={task} onUpdated={onUpdated} />);

    const button = screen.getByRole('button')

    fireEvent.click(button);

    expect(onUpdated).toHaveBeenCalledTimes(1);
  });

  test('should emit onUpdated event when updating description', () => {
    const onUpdated = jest.fn();

    render(<ItemList task={task} onUpdated={onUpdated} />);

    const input = screen.getByDisplayValue("task test")

    input.focus()
    fireEvent.change(input, { target: { value: 'update description' } });
    fireEvent.focusOut(input);

    expect(onUpdated).toHaveBeenCalledTimes(1);
  });

  test('not should emit onUpdated event when updating description empty', () => {
    const onUpdated = jest.fn();

    render(<ItemList task={task} onUpdated={onUpdated} />);

    const input = screen.getByDisplayValue("task test")

    input.focus()
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.focusOut(input);

    expect(onUpdated).toHaveBeenCalledTimes(0);
    expect(screen.getByDisplayValue("task test")).toBeInTheDocument();
  });
});