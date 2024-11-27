import { requestJira } from '@forge/bridge';
import { renderHook, waitFor } from '@testing-library/react';

import type { FormValues } from '../types';
import { useJiraSearch } from './useJiraSearch';

const mockedRequestJira = jest.mocked(requestJira);

it('returns when formValues.jql is empty', () => {
  const { result } = renderHook(() => useJiraSearch({} as FormValues));
  expect(result.current).toEqual({
    isLoading: false,
    issues: [],
  });
});

it.each(['COUNT', 'SUM'])(
  'requests jira when function value is %p',
  async (value) => {
    mockedRequestJira.mockImplementationOnce(async () => {
      return { json: jest.fn() } as unknown as Response;
    });

    const { result } = renderHook(() =>
      useJiraSearch({
        function: [{ value }],
        jql: ['test'],
      } as FormValues),
    );

    await waitFor(() => {
      expect(result.current).toEqual({
        isLoading: false,
        issues: [],
      });
    });

    expect(mockedRequestJira).toHaveBeenCalledTimes(1);
    expect(mockedRequestJira.mock.calls[0]).toMatchSnapshot();
  },
);
