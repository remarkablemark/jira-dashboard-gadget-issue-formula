import type { Payload } from '../types';

interface Props {
  data: Payload;
}

export default function View(props: Props) {
  return (
    <pre>
      <code>{JSON.stringify(props.data, null, 4)}</code>
    </pre>
  );
}
