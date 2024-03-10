import Spinner from '@atlaskit/spinner';

import { useForgeContext } from '../hooks';
import View from './View';

export default function ViewContext() {
  const context = useForgeContext();

  if (!context) {
    return <Spinner label="Loading" />;
  }

  return <View formValues={context.extension.gadgetConfiguration} />;
}
