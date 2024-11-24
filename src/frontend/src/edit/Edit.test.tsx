import { view } from '@forge/bridge';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import type { FormValues, FullContext } from '../types';
import Edit from './Edit';

const mockedView = jest.mocked(view);
let consoleErrorSpy: jest.SpyInstance;

beforeAll(() => {
  // suppress React deprecated Context API error
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

describe('without data', () => {
  beforeEach(async () => {
    mockedView.getContext.mockResolvedValueOnce({
      extension: { gadgetConfiguration: undefined },
    } as unknown as FullContext);

    render(<Edit />);
    await waitFor(() => {
      expect(screen.queryAllByRole('textbox')).toHaveLength(0);
    });
  });

  it.each(['Variables', 'Formulas'])('renders heading %s', (name) => {
    expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument();
  });

  it.each(['Save', 'Cancel'])('renders button %s', (name) => {
    expect(screen.getByRole('button', { name })).toBeInTheDocument();
  });

  it('adds variable and formula', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Add variable' }));
    fireEvent.change(screen.getByLabelText('Variable'), {
      target: { value: 'a' },
    });
    fireEvent.change(screen.getByLabelText('JQL'), {
      target: { value: 'created >= -30d' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Add formula' }));
    fireEvent.change(screen.getByLabelText('Math Formula'), {
      target: { value: 'a / 100' },
    });
    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'monthly issues' },
    });
    fireEvent.change(screen.getByLabelText('Decimals'), {
      target: { value: '2' },
    });
    fireEvent.change(screen.getByLabelText('Prefix'), {
      target: { value: '#' },
    });
    fireEvent.change(screen.getByLabelText('Suffix'), {
      target: { value: '%' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit.mock.calls[0][0]).toMatchSnapshot();
  });

  it('cancels edit', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Add variable' }));
    fireEvent.change(screen.getByLabelText('Variable'), {
      target: { value: 'a' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit).toHaveBeenCalledWith(undefined);
  });
});

describe('with data', () => {
  const formValues: FormValues = {
    decimal: ['2'],
    formula: ['a / 100'],
    function: [{ label: 'COUNT', value: 'COUNT' }],
    jql: ['created >= -30d'],
    label: ['monthly issues'],
    prefix: ['#'],
    suffix: ['%'],
    variable: ['a'],
  };

  beforeEach(async () => {
    mockedView.getContext.mockResolvedValueOnce({
      extension: { gadgetConfiguration: formValues },
    } as unknown as FullContext);

    render(<Edit />);
    await waitFor(() => {
      expect(screen.queryAllByRole('textbox')).toHaveLength(6);
    });
  });

  it('renders inputs', () => {
    Object.values(formValues).forEach(([value]) => {
      if (typeof value !== 'string') {
        value = value.value;
      }
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });
  });

  it('updates variable and formula', () => {
    fireEvent.change(screen.getByLabelText('Variable'), {
      target: { value: 'b' },
    });
    fireEvent.change(screen.getByLabelText('JQL'), {
      target: { value: 'created >= -7d' },
    });

    fireEvent.change(screen.getByLabelText('Math Formula'), {
      target: { value: 'b / 100' },
    });
    fireEvent.change(screen.getByLabelText('Label'), {
      target: { value: 'weekly issues' },
    });
    fireEvent.change(screen.getByLabelText('Decimals'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Prefix'), {
      target: { value: '~' },
    });
    fireEvent.change(screen.getByLabelText('Suffix'), {
      target: { value: '*' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Save' }));
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit.mock.calls[0][0]).toMatchSnapshot();
  });

  it('cancels edit', () => {
    fireEvent.change(screen.getByLabelText('Variable'), {
      target: { value: 'b' },
    });

    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit).toHaveBeenCalledWith(formValues);
  });
});
