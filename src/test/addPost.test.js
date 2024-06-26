import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostList from '../Feed/postList';

test('renders post list', () => {
  const { getByText } = render(<PostList />);
  const addPostButton = getByText('Add Post');
  expect(addPostButton).toBeInTheDocument();
});