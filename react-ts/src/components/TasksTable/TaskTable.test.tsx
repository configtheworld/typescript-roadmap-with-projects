import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '../Header/Header';

describe('Task Table Tests', () => {
  test('should show login form', () => {
    render(<Header />);
    const title = screen.getAllByText('scrum-board-project');
    expect(title).toHaveTextContent('scrum-board-project');
  });
});
