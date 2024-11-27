import Spinner from '@atlaskit/spinner';

import { useFormValues, useGadgetConfiguration, useJiraSearch } from '../hooks';
import { FormValues } from '../types';
import { transform } from './helpers';
import View from './View';

export default function ViewContext() {
  const gadgetConfiguration = useGadgetConfiguration();
  const formValues = useFormValues();

  if (gadgetConfiguration.isLoading) {
    return <Spinner label="Loading" />;
  }

  /* istanbul ignore next */
  if (!formValues.variable?.length || !formValues.formula?.length) {
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
