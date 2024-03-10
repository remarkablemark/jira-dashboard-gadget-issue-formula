import { Field } from '@atlaskit/form';
import AtlaskitTextField, { type TextFieldProps } from '@atlaskit/textfield';
import type { ComponentProps } from 'react';

interface Props extends Omit<TextFieldProps, 'label' | 'validate'> {
  name: string;
  label?: string | boolean;
  validate?: ComponentProps<typeof Field>['validate'];
}

export function TextField(props: Props) {
  const { name, label, validate, ...restProps } = props;

  return (
    <Field<string, HTMLInputElement>
      name={name}
      label={label}
      validate={validate}
    >
      {({ fieldProps }) => <AtlaskitTextField {...fieldProps} {...restProps} />}
    </Field>
  );
}
