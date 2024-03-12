import Spinner from '@atlaskit/spinner';

import { useFormValues } from '../hooks';
import Edit from './Edit';

export default function EditContext() {
  const { isLoading } = useFormValues();

  if (isLoading) {
    return <Spinner label="Loading" />;
  }

  return <Edit />;
}
