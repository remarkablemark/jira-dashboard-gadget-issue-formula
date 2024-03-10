import { useForgeContext } from '../hooks';
import View from './View';

export default function ViewContext() {
  const context = useForgeContext();

  if (!context) {
    return 'Loading...';
  }

  return <View formValues={context.extension.gadgetConfiguration} />;
}
