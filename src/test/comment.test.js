import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentButton from "../Feed/comment";
import { MemoryRouter } from 'react-router-dom';

describe('CommentButton component', () => {
    it('adds a new comment when submitted', () => {
        const postId = 1;
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter initialEntries={['/test']} initialIndex={0}>
                <CommentButton postId={postId} />
            </MemoryRouter>
        );

        const commentInput = getByPlaceholderText('Add comment');
        const addButton = getByText('Add Comment');

        fireEvent.change(commentInput, { target: { value: 'Test comment' } });
        fireEvent.click(addButton);

        expect(getByText('Test comment')).toBeInTheDocument();
    });

    it('deletes a comment when delete button is clicked', () => {
        const postId = 1;
        const { getByPlaceholderText, getByText, queryByText, getByTestId } = render(
            <MemoryRouter initialEntries={['/test']} initialIndex={0}>
                <CommentButton postId={postId} />
            </MemoryRouter>
        );

        const commentInput = getByPlaceholderText('Add comment');
        const addButton = getByText('Add Comment');

        fireEvent.change(commentInput, { target: { value: 'Test comment' } });
        fireEvent.click(addButton);

        expect(getByText('Test comment')).toBeInTheDocument();

        // Create a mock user
        const mockUser = { name: 'Test User', id: 123, email: 'test@example.com' };

        const deleteButton = getByTestId('delete-comment-button-0');
        fireEvent.click(deleteButton);

        expect(queryByText('Test comment')).toBeNull();
    });
});
