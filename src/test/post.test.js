
import Post from "../Feed/post";
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

// Mock onDelete function
const mockDeleteFn = jest.fn();

const testPost = {
  id: 1,
  content: 'Test content',
  author: 'Test Author',
  date: '2024-03-14',
  pic: 'test.jpg',
  onDelete: mockDeleteFn,
};

describe('Post component', () => {
  it('calls onDelete when delete button is clicked', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Post {...testPost} />
      </MemoryRouter>
    );

    const deleteButton = getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(mockDeleteFn).toHaveBeenCalledWith(1);
  });
});

