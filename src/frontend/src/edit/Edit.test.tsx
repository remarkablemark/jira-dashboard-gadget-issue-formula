import { view } from '@forge/bridge';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import Edit from './Edit';

const mockedView = jest.mocked(view);

// with no data
describe('new gadget', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    mockedView.getContext.mockResolvedValueOnce({
      extension: { gadgetConfiguration: undefined },
    } as unknown as FullContext);
    // suppress React deprecated Context API error
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
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

  it('adds variable row', async () => {
    render(<Edit />);
    fireEvent.click(screen.getByRole('button', { name: 'Add variable' }));
    await waitFor(() => {
      expect(screen.getAllByRole('textbox')).toHaveLength(2);
    });
    ['Variable', 'Function', 'JQL'].forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });
    // Function
    expect(screen.getByDisplayValue('COUNT')).toBeInTheDocument();
  });

  it('adds formula row', async () => {
    render(<Edit />);
    fireEvent.click(screen.getByRole('button', { name: 'Add formula' }));
    await waitFor(() => {
      expect(screen.getAllByRole('textbox')).toHaveLength(6);
    });
    ['Math Formula', 'Label', 'Decimals', 'Prefix', 'Suffix'].forEach(
      (label) => {
        expect(screen.getByLabelText(label)).toBeInTheDocument();
      },
    );
    // Decimals
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});
