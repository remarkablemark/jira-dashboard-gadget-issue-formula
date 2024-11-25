import { Parser } from 'expr-eval';

import { log } from '../helpers';
import { FormValues, Issue } from '../types';

export function transform(formValues: FormValues, issues: Issue[]) {
  const variables = getVariables(formValues, issues);

  return formValues.label.map((label, index) => {
    let value = '';
    const formula = formValues.formula[index];
    const decimal = Number(formValues.decimal[index]);

    try {
      value = Parser.evaluate(formula, variables).toFixed(decimal);
    } catch (error) {
      log.error('expr-eval:', error);
    }

    const prefix = formValues.prefix[index] || '';
    const suffix = formValues.suffix[index] || '';
    value = `${prefix}${value}${suffix}`;

    return {
      label,
      value,
    };
  });
}

export function getVariables(formValues: FormValues, issues: Issue[]) {
  return formValues.variable.reduce(
    (accumulator: Record<string, number>, variable, index) => {
      let value = NaN;
      const issue = issues[index];

      if (!issue) {
        return accumulator;
      }

      switch (formValues.function[index].value) {
        case 'COUNT':
          value = issues[index].total;
          break;
      }

      accumulator[variable] = value;
      return accumulator;
    },
    {},
  );
}
