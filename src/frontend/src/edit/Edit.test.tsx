import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import { changeLabelValue, clickButton } from '../../test/helpers';
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

  it('submits variable and formula', () => {
    clickButton('Add variable');
    [
      ['Variable', 'a'],
      ['JQL', 'created >= -30d'],
    ].forEach(([label, value]) => changeLabelValue(label, value));

    clickButton('Add formula');
    [
      ['Math Formula', 'a / 100'],
      ['Label', 'monthly issues'],
      ['Decimals', '2'],
      ['Prefix', '#'],
      ['Suffix', '%'],
    ].forEach(([label, value]) => changeLabelValue(label, value));

    clickButton('Save');
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit.mock.calls[0][0]).toMatchSnapshot();
  });

  it('cancels edit', () => {
    clickButton('Add variable');
    changeLabelValue('Variable', 'a');

    clickButton('Cancel');
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

  it('submits edited variable and formula', () => {
    [
      ['Variable', 'b'],
      ['JQL', 'created >= -7d'],
      ['Math Formula', 'b / 100'],
      ['Label', 'weekly issues'],
      ['Decimals', '1'],
      ['Prefix', '~'],
      ['Suffix', '*'],
    ].forEach(([label, value]) => changeLabelValue(label, value));

    clickButton('Save');
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit.mock.calls[0][0]).toMatchSnapshot();
  });

  it('cancels edit', () => {
    changeLabelValue('Variable', 'b');
    clickButton('Cancel');
    expect(mockedView.submit).toHaveBeenCalledTimes(1);
    expect(mockedView.submit).toHaveBeenCalledWith(formValues);
  });
});
