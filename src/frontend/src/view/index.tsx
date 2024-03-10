import Spinner from '@atlaskit/spinner';
import { useMemo } from 'react';

import { useFormValues, useJiraSearch } from '../hooks';
import View from './View';

export default function ViewContext() {
  const formValues = useFormValues();
  const payload = useMemo(() => {
    return {
      jql: formValues?.jql,
      maxResults: 0,
    };
  }, [formValues]);
  const data = useJiraSearch(payload);

  if (!data) {
    return <Spinner label="Loading" />;
  }

  return <View data={data} />;
}
