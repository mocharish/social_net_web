

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from "../Feed/menu";

// Mocking useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Menu component', () => {
  test('renders menu items', () => {
    const { getByText } = render(<Menu />);

    // Assert that menu items are rendered
    expect(getByText('Settings & Privacy')).toBeInTheDocument();
    expect(getByText('Help & Support')).toBeInTheDocument();
    expect(getByText('Send Feedback')).toBeInTheDocument();
    expect(getByText('Log Out')).toBeInTheDocument();
  });

  test('calls toggleDarkMode when mode toggle button is clicked', () => {
    const toggleDarkMode = jest.fn();
    const { getByText } = render(<Menu toggleDarkMode={toggleDarkMode} />);

    // Simulate clicking the mode toggle button
    fireEvent.click(getByText('Switch to Dark Mode'));

    // Assert that toggleDarkMode function is called
    expect(toggleDarkMode).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
