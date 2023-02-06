import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import List, {Task} from ".";

const tasks: Task[] = [
  {
    id: '1',
    description: "task test",
    finished: false
  }
]

describe('List', () => {
  test('should render with default props', () => {
    const { container } = render(<List />);

    expect(container).toBeInTheDocument();
  });

  test('should render tasks', () => {
    render(<List tasks={tasks}/>);

    tasks.forEach((task) => {
      expect(screen.getByDisplayValue(task.description)).toBeInTheDocument();
    });
  });

  test('should emit onUpdated event', () => {
    const onUpdated = jest.fn();

    render(<List onUpdated={onUpdated} tasks={tasks} />);

    const input = screen.getByDisplayValue("task test")

    input.focus()
    fireEvent.change(input, { target: { value: 'update description' } });
    fireEvent.focusOut(input);

    expect(onUpdated).toHaveBeenCalledTimes(1);
});
});