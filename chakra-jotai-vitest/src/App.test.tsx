import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App.tsx tests', () => {
  it('App component should display welcome message', () => {
    render(<App />);
    expect(screen.getByText(/ChakraUI \+ Jotai \+ Vitest/));
  });
});
