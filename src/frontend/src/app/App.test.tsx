import { render, screen } from '@testing-library/react';

import App from './App';

it('renders loading icon', () => {
  render(<App />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});
