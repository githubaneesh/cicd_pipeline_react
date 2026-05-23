import {test,expect} from 'vitest';
import React from 'react';
import {render,screen} from '@testing-library/react';
import Greetings from './greetings';

test('renders the correct greeting message', () => {
  render(<Greetings name="Alice" />);
  const greetingElement = screen.getByText(/Hello.*Alice.*welcome/);
  expect(greetingElement).toBeInTheDocument();
});

test('renders the correct greeting message with different name', () => {
  render(<Greetings name="Bob" />);
  const greetingElement = screen.getByText(/Hello.*Bob.*welcome/);
  expect(greetingElement).toBeInTheDocument();
});