import { render, screen } from '@testing-library/react';

import { clickButton } from '../../../test/helpers';
import Variables from './Variables';

const INPUT_COUNT_PER_ROW = 2;
let consoleErrorSpy: jest.SpyInstance;

beforeAll(() => {
  // suppress React deprecated Context API error
  consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
});

afterAll(() => {
  consoleErrorSpy.mockRestore();
});

beforeEach(() => {
  render(<Variables />);
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});

it('renders heading', () => {
  expect(
    screen.getByRole('heading', { level: 3, name: 'Variables' }),
  ).toBeInTheDocument();
});

it('renders button', () => {
  expect(
    screen.getByRole('button', { name: 'Add variable' }),
  ).toBeInTheDocument();
});

it('adds variable', () => {
  clickButton('Add variable');
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);
  ['Variable', 'Function', 'JQL'].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
  // Function
  expect(screen.getByDisplayValue('COUNT')).toBeInTheDocument();
});

it('adds variable', () => {
  const rows = 2;
  [...Array(rows)].forEach(() => clickButton('Add variable'));
  expect(screen.getAllByRole('textbox')).toHaveLength(
    INPUT_COUNT_PER_ROW * rows,
  );
});

it('deletes variable', () => {
  // add
  clickButton('Add variable');
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);

  // delete
  clickButton('Delete variable');
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});
