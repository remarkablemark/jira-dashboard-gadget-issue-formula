import { fireEvent, render, screen } from '@testing-library/react';

import Formulas from './Formulas';

const INPUT_COUNT_PER_ROW = 4;

beforeEach(() => {
  render(<Formulas />);
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});

it('renders heading', () => {
  expect(
    screen.getByRole('heading', { level: 3, name: 'Formulas' }),
  ).toBeInTheDocument();
});

it('renders button', () => {
  expect(
    screen.getByRole('button', { name: 'Add formula' }),
  ).toBeInTheDocument();
});

it('adds formula', () => {
  fireEvent.click(screen.getByRole('button', { name: 'Add formula' }));
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);
  ['Math Formula', 'Label', 'Decimals', 'Prefix', 'Suffix'].forEach((label) => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });
  // Decimals
  expect(screen.getByDisplayValue('0')).toBeInTheDocument();
});

it('adds formula', () => {
  const rows = 2;
  Array(rows)
    .fill(null)
    .forEach(() => {
      fireEvent.click(screen.getByRole('button', { name: 'Add formula' }));
    });
  expect(screen.getAllByRole('textbox')).toHaveLength(
    INPUT_COUNT_PER_ROW * rows,
  );
});

it('deletes formula', () => {
  // add
  fireEvent.click(screen.getByRole('button', { name: 'Add formula' }));
  expect(screen.getAllByRole('textbox')).toHaveLength(INPUT_COUNT_PER_ROW);

  // delete
  fireEvent.click(screen.getByRole('button', { name: 'Delete formula' }));
  expect(screen.queryAllByRole('textbox')).toHaveLength(0);
});
