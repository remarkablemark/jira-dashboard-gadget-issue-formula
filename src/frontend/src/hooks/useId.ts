import { useCallback, useState } from 'react';

export function useId() {
  const [ids, setIds] = useState<string[]>([]);

  const createId = useCallback(() => {
    setIds(ids.concat(generateId()));
  }, [ids, setIds]);

  const deleteId = useCallback(
    (id: string) => {
      if (id) {
        setIds(ids.filter((currentId) => currentId !== id));
      }
    },
    [ids, setIds],
  );

  return {
    ids,
    createId,
    deleteId,
  };
}

function generateId() {
  try {
    return crypto.randomUUID();
  } catch (error) {
    return String(Date.now() + Math.random());
  }
}
