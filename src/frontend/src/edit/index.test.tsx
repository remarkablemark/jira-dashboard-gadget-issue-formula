import { render, screen } from '@testing-library/react';

import { useGadgetConfiguration } from '../hooks';
import Edit from '.';

jest.mock('../hooks', () => ({
  useGadgetConfiguration: jest.fn(),
}));

jest.mock('./Edit', () => () => <>Edit</>);

const mockedUseGadgetConfiguration = jest.mocked(useGadgetConfiguration);

it('renders loading icon', () => {
  mockedUseGadgetConfiguration.mockReturnValue({ isLoading: true });
  render(<Edit />);
  expect(screen.getByLabelText('Loading')).toBeInTheDocument();
});

it('renders edit', () => {
  mockedUseGadgetConfiguration.mockReturnValue({ isLoading: false });
  render(<Edit />);
  expect(screen.getByText('Edit')).toBeInTheDocument();
});
