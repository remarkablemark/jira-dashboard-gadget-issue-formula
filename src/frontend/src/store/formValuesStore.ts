import { create } from 'zustand';

import type { FormValues } from '../types';

interface State extends FormValues {
  setFormValues: (formValues: FormValues) => void;
  updateFormValue: (
    key: keyof FormValues,
    index: number,
    value: string,
  ) => void;
  addVariable: () => void;
  deleteVariable: (index: number) => void;
  addFormula: () => void;
  deleteFormula: (index: number) => void;
}

export const useFormValuesStore = create<State>()((set) => ({
  decimal: [],
  formula: [],
  function: [],
  jql: [],
  label: [],
  variable: [],

  setFormValues: (formValues) => set(() => formValues),

  updateFormValue: (key, index, value) =>
    set((state) => {
      const newState = { ...state };
      if (key === 'function') {
        newState.function[index] = { label: value, value };
      } else {
        newState[key][index] = value;
      }
      return newState;
    }),

  addVariable: () =>
    set((state) => ({
      variable: state.variable.concat(''),
      function: state.function.concat({
        label: 'COUNT',
        value: 'COUNT',
      }),
      jql: state.jql.concat(''),
    })),

  deleteVariable: (index) =>
    set((state) => {
      const newState = { ...state };
      (['variable', 'function', 'jql'] as const).forEach((key) => {
        delete newState[key][index];
        // @ts-expect-error valid type
        newState[key] = newState[key].filter((value) => value !== undefined);
      });
      return newState;
    }),

  addFormula: () =>
    set((state) => ({
      formula: state.formula.concat(''),
      label: state.label.concat(''),
      decimal: state.decimal.concat('0'),
    })),

  deleteFormula: (index) =>
    set((state) => ({
      formula: state.formula.filter((_, idx) => idx !== index),
      label: state.label.filter((_, idx) => idx !== index),
      decimal: state.decimal.filter((_, idx) => idx !== index),
    })),
}));
