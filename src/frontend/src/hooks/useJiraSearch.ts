import { requestJira } from '@forge/bridge';
import { useEffect, useState } from 'react';

import { log } from '../helpers';
import type { Payload } from '../types';

export function useJiraSearch(payload: Payload) {
  const [data, setData] = useState<Payload | undefined>();

  useEffect(() => {
    if (data || !payload.jql) {
      return;
    }

    requestJira('/rest/api/3/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(setData)
      .catch(log.error);
  }, [data, payload]);

  return data;
}
