import { useForgeContext } from 'src/hooks';

export default function View() {
  const context = useForgeContext();

  if (!context) {
    return 'Loading...';
  }

  return <div>{JSON.stringify(context.extension.gadgetConfiguration)}</div>;
}
