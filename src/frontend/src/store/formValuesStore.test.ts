import { act, renderHook } from '@testing-library/react';

import { useFormValuesStore } from './formValuesStore';

describe('updateFormValue', () => {
  it('updates function', () => {
    const {
      result: { current: store },
    } = renderHook(() => useFormValuesStore());
    const value = 'value';

    act(() => {
      const index = 0;
      store.updateFormValue('function', index, value);
    });

    expect(store.function).toEqual([
      {
        label: value,
        value,
      },
    ]);
  });
});

describe('deleteVariable', () => {
  it('deletes variable', () => {
    const {
      result: { current: store },
    } = renderHook(() => useFormValuesStore());
    const index = 0;

    act(() => {
      const value = 'value';
      store.updateFormValue('variable', index, value);
      expect(store.variable).toEqual([value]);
    });

    act(() => {
      store.deleteVariable(index);
      expect(store.variable).toEqual([]);
    });
  });
});
