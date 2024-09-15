// src/utils/test-utils.tsx
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store'; // ajuste o caminho do seu store

const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(<Provider store={store}>{ui}</Provider>, options);

export * from '@testing-library/react';
export { renderWithProviders };
