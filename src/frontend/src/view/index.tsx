import Spinner from '@atlaskit/spinner';
import { useMemo } from 'react';

import { useFormValues, useJiraSearch } from '../hooks';
import { FormValues } from '../types';
import View from './View';

export default function ViewContext() {
  const formValues = useFormValues();
  const payload = useMemo(() => {
    return {
      jql: formValues?.jql,
      maxResults: 0,
    };
  }, [formValues]);
  const jiraResponse = useJiraSearch(payload);

  if (!formValues || !jiraResponse) {
    return <Spinner label="Loading" />;
  }

  return <View data={transform(formValues, jiraResponse)} />;
}

function transform(formValues: FormValues, jiraResponse: { total: number }) {
  return [
    {
      label: formValues.name,
      value: jiraResponse.total.toFixed(0),
    },
  ];
}
