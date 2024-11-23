import { render, screen } from '@testing-library/react';

import View from './View';

it('renders loading icon', () => {
  const label = 'label';
  const value = 'value';
  render(<View data={[{ label, value }]} />);
  expect(
    screen.getByRole('heading', { level: 1, name: value }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { level: 2, name: label }),
  ).toBeInTheDocument();
});
