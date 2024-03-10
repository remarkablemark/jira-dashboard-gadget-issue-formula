import type { FormValues } from '../types';

interface Props {
  formValues: FormValues;
}

export default function View(props: Props) {
  return <div>{JSON.stringify(props.formValues)}</div>;
}
