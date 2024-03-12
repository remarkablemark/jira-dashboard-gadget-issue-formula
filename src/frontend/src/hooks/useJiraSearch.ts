import { requestJira } from '@forge/bridge';
import { useEffect, useState } from 'react';

import { log } from '../helpers';
import { FormValues, Issue } from '../types';

export function useJiraSearch(formValues: FormValues) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    if (hasLoaded || !formValues.jql.length) {
      return;
    }

    const requests = formValues.jql.map((jql, index) =>
      requestJira('/rest/api/3/search', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jql,
          maxResults:
            formValues.function[index].value === 'COUNT' ? 0 : undefined,
        }),
      })
        .then((response) => response.json())
        .catch(log.error),
    );

    Promise.all(requests)
      .then((issues) => {
        setIssues(issues);
      })
      .catch(log.error)
      .finally(() => setHasLoaded(true));
  }, [formValues, hasLoaded, issues]);

  return {
    isLoading: !hasLoaded,
    issues,
  };
}
