import Spinner from '@atlaskit/spinner';

import { useGadgetConfiguration } from '../hooks';
import Edit from './Edit';

export default function EditContext() {
  const { isLoading } = useGadgetConfiguration();

  if (isLoading) {
    return <Spinner label="Loading" />;
  }

  return <Edit />;
}
