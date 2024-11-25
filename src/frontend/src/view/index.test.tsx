import { view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FullContext } from '../types';
import View from '.';

const mockedView = jest.mocked(view);

describe('without data', () => {
  beforeEach(() => {
    mockedView.getContext.mockResolvedValueOnce({
      extension: { gadgetConfiguration: undefined },
    } as unknown as FullContext);
  });

  it('renders loading icon', async () => {
    render(<View />);
    await waitFor(() => {
      expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });
  });

  it('does not render heading', async () => {
    render(<View />);
    await waitFor(() => {
      expect(screen.queryAllByRole('heading')).toHaveLength(0);
    });
  });
});
