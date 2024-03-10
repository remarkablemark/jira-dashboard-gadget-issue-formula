import { requestJira } from '@forge/bridge';
import { useEffect, useState } from 'react';

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
      // eslint-disable-next-line no-console
      .catch((error) => console.error('[ISSUE FORMULA]', error));
  }, [data, payload]);

  return data;
}
