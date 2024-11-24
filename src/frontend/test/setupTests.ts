// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { act, renderHook } from '@testing-library/react';

import { useFormValuesStore } from '../src/store';
import { FormValues } from '../src/types';

jest.mock('@forge/bridge', () => ({
  requestJira: jest.fn().mockResolvedValue({ json: jest.fn() }),
  view: {
    getContext: jest.fn().mockResolvedValue(undefined),
    submit: jest.fn(),
  },
}));

jest.mock('../src/env');

afterEach(() => {
  jest.clearAllMocks();

  // reset store
  const { result } = renderHook(() => useFormValuesStore());
  act(() => {
    result.current.setFormValues({} as FormValues);
  });
});
