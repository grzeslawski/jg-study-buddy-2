import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils.js';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong login or password', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: '520' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test1234' } });

    fireEvent.click(screen.getByText('Sign in'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
