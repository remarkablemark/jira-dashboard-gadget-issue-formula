import { render, screen } from '@testing-library/react';

import { changeLabelValue } from '../../../test/helpers';
import VariableRow from './VariableRow';

let consoleErrorSpy: jest.SpyInstance;

beforeAll(() => {
  // suppress React deprecated Context API error
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

const props = {
  index: 0,
  showLabel: true,
};

it('renders labels', () => {
  render(<VariableRow {...props} />);
  ['Variable', 'Function', 'JQL'].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
});

it('renders button', () => {
  render(<VariableRow {...props} />);
  expect(
    screen.getByRole('button', { name: 'Delete variable' }),
  ).toBeInTheDocument();
});

it('selects option', () => {
  render(<VariableRow {...props} />);
  const value = 'test';
  changeLabelValue('Function', value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
