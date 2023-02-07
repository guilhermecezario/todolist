import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import MockAdapter from "axios-mock-adapter";

import { api } from "../../services/api";

import Home, { Task } from ".";

const apiMock = new MockAdapter(api);

const tasks: Task[] = [
  {
    id: "1",
    description: "task test",
    finished: false,
  },
];

describe("Home", () => {
  test("should render tasks", async () => {
    apiMock.onGet("tasks").reply(200, tasks);

    act(() => render(<Home />));

    await waitFor(() => {
      tasks.forEach((task) => {
        expect(screen.getByDisplayValue(task.description)).toBeInTheDocument();
      });
    });
  });

  test("should update task", async () => {
    apiMock.onGet("tasks").reply(200, tasks);
    apiMock.onPatch("tasks/1").reply(200, {
      id: "1",
      description: "update description",
      finished: false,
    });

    act(() => render(<Home />));

    const input = await waitFor(() => screen.getByDisplayValue("task test"));

    input.focus();
    fireEvent.change(input, { target: { value: "update description" } });

    await act(() => fireEvent.focusOut(input));

    expect(screen.getByDisplayValue("update description")).toBeInTheDocument();
  });

  test("should create task", async () => {
    apiMock.onGet("tasks").reply(200, tasks);
    apiMock.onPost("tasks").reply(200, {
      id: "2",
      description: "add description",
      finished: false,
    });

    act(() => render(<Home />));

    const input = screen.getByPlaceholderText("Descreva a nova tarefa");
    const button = screen.getByText("Adicionar");

    fireEvent.change(input, { target: { value: "add description" } });

    await act(() => fireEvent.click(button));

    fireEvent.change(input, { target: { value: "" } });

    expect(screen.getByDisplayValue("add description")).toBeInTheDocument();
  });
});
