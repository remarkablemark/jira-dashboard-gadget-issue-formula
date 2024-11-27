import { requestJira, view } from '@forge/bridge';
import { render, screen, waitFor } from '@testing-library/react';

import type { FormValues, FullContext } from '../types';
import View from '.';

const mockedRequestJira = jest.mocked(requestJira);
const mockedView = jest.mocked(view);

describe('without data', () => {
  beforeEach(() => {
    mockedView.getContext.mockResolvedValue({
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
      expect(screen.queryAllByLabelText('Loading')).toHaveLength(0);
      expect(screen.queryAllByRole('heading')).toHaveLength(0);
    });
  });
});

describe('with data', () => {
  const formValues: FormValues = {
    decimal: ['2'],
    formula: ['b / a * 100'],
    function: [
      { label: 'COUNT', value: 'COUNT' },
      { label: 'COUNT', value: 'COUNT' },
    ],
    jql: ['created >= -30d', 'created >= -30d and reporter = currentUser()'],
    label: ['percentage of issues created by me in the last month'],
    prefix: [''],
    suffix: ['%'],
    variable: ['a', 'b'],
  };

  beforeEach(() => {
    mockedView.getContext.mockResolvedValue({
      extension: { gadgetConfiguration: formValues },
    } as unknown as FullContext);

    mockedRequestJira.mockImplementation(async (_restPath, fetchOptions) => {
      const response = { json: jest.fn() } as unknown as Response;

      if (typeof fetchOptions?.body != 'string') {
        return response;
      }

      switch (true) {
        case fetchOptions.body.includes(formValues.jql[1]):
          (response.json as jest.Mock).mockResolvedValue({
            startAt: 0,
            maxResults: 0,
            total: 1,
            issues: [],
          });
          break;

        case fetchOptions.body.includes(formValues.jql[0]):
          (response.json as jest.Mock).mockResolvedValue({
            startAt: 0,
            maxResults: 0,
            total: 3,
            issues: [],
          });
          break;
      }

      return response;
    });
  });

  it('renders loading icon', async () => {
    render(<View />);
    await waitFor(() => {
      expect(screen.getByLabelText('Loading')).toBeInTheDocument();
    });
  });

  it('renders heading', async () => {
    render(<View />);
    await waitFor(() => {
      expect(screen.queryByLabelText('Loading')).not.toBeInTheDocument();
    });

    expect(
      screen.getByRole('heading', { level: 1, name: '33.33%' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: formValues.label[0] }),
    ).toBeInTheDocument();
  });
});
