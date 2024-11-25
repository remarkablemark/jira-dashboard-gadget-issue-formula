import { renderHook } from '@testing-library/react';

import type { FormValues } from '../types';
import { useJiraSearch } from './useJiraSearch';

it('returns when formValues.jql is empty', () => {
  const { result } = renderHook(() => useJiraSearch({} as FormValues));
  expect(result.current).toEqual({
    isLoading: false,
    issues: [],
  });
});
