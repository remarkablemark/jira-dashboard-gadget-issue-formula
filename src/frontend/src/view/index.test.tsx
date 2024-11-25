import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import View from '.';

const mockedView = jest.mocked(view);

it('renders loading icon', async () => {
  mockedView.getContext.mockResolvedValueOnce({
    extension: { gadgetConfiguration: undefined },
  } as unknown as FullContext);
  render(<View />);
  await waitFor(() => {
    expect(screen.getByLabelText('Loading')).toBeInTheDocument();
  });
});
