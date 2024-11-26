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

const variableInitialState = {
  variable: [],
  function: [],
  jql: [],
};

type VariableKey = keyof typeof variableInitialState;

const formulaInitialState = {
  formula: [],
  label: [],
  decimal: [],
  prefix: [],
  suffix: [],
};

type FormulaKey = keyof typeof formulaInitialState;

export const useFormValuesStore = create<State>()((set) => ({
  ...variableInitialState,
  ...formulaInitialState,

  setFormValues: (formValues) =>
    set(() => {
      // backfill variable if missing
      (Object.keys(variableInitialState) as VariableKey[]).forEach(
        (variableKey) => {
          if (!formValues[variableKey]) {
            formValues[variableKey] = new Array(
              formValues.variable?.length || 0,
            ).fill('');
          }
        },
      );

      // backfill formula if missing
      (Object.keys(formulaInitialState) as FormulaKey[]).forEach(
        (formulaKey) => {
          if (!formValues[formulaKey]) {
            formValues[formulaKey] = new Array(
              formValues.formula?.length || 0,
            ).fill('');
          }
        },
      );

      return formValues;
    }),

  updateFormValue: (key: VariableKey | FormulaKey, index, value) =>
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
      const variableKeys = Object.keys(variableInitialState) as VariableKey[];
      variableKeys.forEach((variableKey) => {
        delete newState[variableKey][index];
        // @ts-expect-error valid type
        newState[variableKey] = newState[variableKey].filter(
          /* istanbul ignore next */
          (value) => value !== undefined,
        );
      });
      return newState;
    }),

  addFormula: () =>
    set((state) => ({
      formula: state.formula.concat(''),
      label: state.label.concat(''),
      decimal: state.decimal.concat('0'),
      prefix: state.prefix.concat(''),
      suffix: state.suffix.concat(''),
    })),

  deleteFormula: (index) =>
    set((state) => ({
      formula: state.formula.filter((_, idx) => idx !== index),
      label: state.label.filter((_, idx) => idx !== index),
      decimal: state.decimal.filter((_, idx) => idx !== index),
      prefix: state.prefix.filter((_, idx) => idx !== index),
      suffix: state.suffix.filter((_, idx) => idx !== index),
    })),
}));
