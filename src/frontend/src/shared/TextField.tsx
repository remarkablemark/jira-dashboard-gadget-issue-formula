import { Field } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives';
import AtlaskitTextField, {
  type TextFieldProps as AtlaskitTextFieldProps,
} from '@atlaskit/textfield';
import type { ComponentProps } from 'react';

export interface TextFieldProps
  extends Omit<AtlaskitTextFieldProps, 'label' | 'validate'> {
  name: string;
  label?: string | boolean;
  validate?: ComponentProps<typeof Field>['validate'];
  width?: number;
}

export function TextField(props: TextFieldProps) {
  const { name, label, validate, width, ...restProps } = props;

  return (
    <Box style={{ width }}>
      <Field<string, HTMLInputElement>
        name={name}
        label={label}
        validate={validate}
      >
        {({ fieldProps }) => (
          <AtlaskitTextField {...fieldProps} {...restProps} />
        )}
      </Field>
    </Box>
  );
}
