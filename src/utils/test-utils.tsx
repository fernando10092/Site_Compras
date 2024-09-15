// src/utils/test-utils.tsx
import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store'; // ajuste o caminho do seu store
import userEvent from '@testing-library/user-event';

const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  const utils = render(<Provider store={store}>{ui}</Provider>, options);
  return {
    ...utils,
    user: userEvent.setup() // Adiciona `user` ao objeto retornado
  };
};

export * from '@testing-library/react';
export { renderWithProviders };
