import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import Edit from './Edit';

const mockedView = jest.mocked(view);

it('renders headings', async () => {
  mockedView.getContext.mockResolvedValueOnce({
    extension: { gadgetConfiguration: undefined },
  } as unknown as FullContext);
  render(<Edit />);
  await waitFor(() => {
    ['Variables', 'Formulas'].forEach((name) => {
      expect(
        screen.getByRole('heading', { level: 3, name }),
      ).toBeInTheDocument();
    });
  });
});

it('renders buttons', async () => {
  mockedView.getContext.mockResolvedValueOnce({
    extension: { gadgetConfiguration: undefined },
  } as unknown as FullContext);
  render(<Edit />);
  await waitFor(() => {
    ['Save', 'Cancel'].forEach((name) => {
      expect(screen.getByRole('button', { name })).toBeInTheDocument();
    });
  });
});
