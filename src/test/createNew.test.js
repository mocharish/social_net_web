
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateNew from "../loginPage/createNew";

// Mock the Popover object
window.bootstrap = {
  Popover: jest.fn()
};

describe('CreateNew component', () => {
  it('should display error when passwords do not match', () => {
    const { getByPlaceholderText, getByText } = render(<CreateNew />);

    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm password');

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'differentpassword' } });

    const errorMessage = getByText('Passwords do not match');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should not display error when passwords match', () => {
    const { getByPlaceholderText, queryByText } = render(<CreateNew />);

    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm password');

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password' } });

    const errorMessage = queryByText('Passwords do not match');

    expect(errorMessage).not.toBeInTheDocument();
  });
});
