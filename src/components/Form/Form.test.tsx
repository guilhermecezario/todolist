import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Form from ".";

jest.useFakeTimers();

describe('Form', () => {
    test('should render with all components', () => {
        render(<Form />);

        expect(screen.getByText('Adicionar')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Descreva a nova tarefa')).toBeInTheDocument();
    });

    test('button should emit onSubmit event', () => {
        const onSubmit = jest.fn();

        render(<Form onSubmit={onSubmit} />);

        const input = screen.getByPlaceholderText('Descreva a nova tarefa')
        fireEvent.change(input, {target: {value: 'Picles'}});
        
        const button = screen.getByRole('button')

        button.click();

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});