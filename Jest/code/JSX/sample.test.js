// Sample.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Sample from './Sample';

describe('Sample component', () => {
  test('renders heading correctly', () => {
    render(<Sample />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Sample Component');
  });

  test('renders paragraph text correctly', () => {
    render(<Sample />);
    const paragraph = screen.getByText('This is a sample React component for testing.');
    expect(paragraph).toBeInTheDocument();
  });

  test('renders both heading and paragraph inside a div', () => {
    render(<Sample />);
    const container = screen.getByRole('heading', { level: 1 }).parentElement;
    expect(container.tagName).toBe('DIV');
    expect(container).toContainElement(screen.getByText('This is a sample React component for testing.'));
  });
});