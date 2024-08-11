import Spinner from '@atlaskit/spinner';
import { Parser } from 'expr-eval';

import { log } from '../helpers';
import { useFormValues, useGadgetConfiguration, useJiraSearch } from '../hooks';
import { FormValues, Issue } from '../types';
import View from './View';

export default function ViewContext() {
  const gadgetConfiguration = useGadgetConfiguration();
  const formValues = useFormValues();

  if (gadgetConfiguration.isLoading) {
    return <Spinner label="Loading" />;
  }

  if (!formValues.variable.length || !formValues.formula.length) {
    return null;
  }

  return <ViewFormValues formValues={formValues} />;
}

function ViewFormValues({ formValues }: { formValues: FormValues }) {
  const jiraSearch = useJiraSearch(formValues);

  if (jiraSearch.isLoading) {
    return <Spinner label="Loading" />;
  }

  const data = transform(formValues, jiraSearch.issues);
  return <View data={data} />;
}

function transform(formValues: FormValues, issues: Issue[]) {
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

    const prefix = formValues.prefix[index];
    if (prefix) {
      value = `${prefix}${value}`;
    }

    return {
      label,
      value,
    };
  });
}

function getVariables(formValues: FormValues, issues: Issue[]) {
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
