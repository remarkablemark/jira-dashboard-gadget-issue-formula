import Spinner from '@atlaskit/spinner';
import { view } from '@forge/bridge';

import { useFormValues } from '../hooks';
import Edit from './Edit';

export default function EditContext() {
  const formValues = useFormValues();

  if (!formValues) {
    return <Spinner label="Loading" />;
  }

  return <Edit formValues={formValues} view={view} />;
}
