import { useEffect } from 'react';

import { DEV } from '../env';
import { decode, log } from '../helpers';
import { useFormValuesStore } from '../store';
import type { FormValues } from '../types';
import { useForgeContext } from './useForgeContext';

interface Result {
  formValues?: FormValues;
  isLoading: boolean;
}

export function useGadgetConfiguration(): Result {
  const context = useForgeContext();
  const { setFormValues } = useFormValuesStore();
  const formValues: FormValues = context?.extension.gadgetConfiguration;

  useEffect(() => {
    if (!formValues) {
      return;
    }

    (['formula', 'jql', 'label'] as const).forEach((key) => {
      /* istanbul ignore next */
      formValues[key]?.forEach((value, index) => {
        formValues[key][index] = decode(value);
      });
    });

    /* istanbul ignore if */
    if (DEV) {
      log.info('formValues:', formValues);
    }

    setFormValues(formValues);
  }, [formValues, setFormValues]);

  return {
    formValues,
    isLoading: !context,
  };
}
