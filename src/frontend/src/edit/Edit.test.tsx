import { view } from '@forge/bridge';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import Edit from './Edit';

const mockedView = jest.mocked(view);

// with no data
describe('new gadget', () => {
  beforeEach(() => {
    mockedView.getContext.mockResolvedValueOnce({
      extension: { gadgetConfiguration: undefined },
    } as unknown as FullContext);
  });

  it('renders headings', async () => {
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
    render(<Edit />);
    await waitFor(() => {
      ['Save', 'Cancel'].forEach((name) => {
        expect(screen.getByRole('button', { name })).toBeInTheDocument();
      });
    });
  });

  it('adds variable', async () => {
    render(<Edit />);
    // suppress React deprecated Context API error
    const spy = jest.spyOn(console, 'error').mockImplementation();
    fireEvent.click(screen.getByRole('button', { name: 'Add variable' }));
    spy.mockRestore();
    await waitFor(() => {
      ['Variable', 'Function', 'JQL'].forEach((label) => {
        expect(screen.getByLabelText(label)).toBeInTheDocument();
      });
    });
  });
});
