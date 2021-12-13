import React from 'react';
import '@testing-library/jest-dom';
import FormField from './FormField.js';
import { renderWithProviders } from 'helpers/renderWithProviders.js';

describe('Input With Button', () => {
  it('renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
