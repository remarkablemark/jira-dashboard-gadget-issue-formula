import { Field } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives';
import AtlaskitTextArea, {
  type TextAreaProps as AtlaskitTextAreaProps,
} from '@atlaskit/textarea';
import type { CSSProperties } from 'react';

export interface TextAreaProps extends AtlaskitTextAreaProps {
  name: string;
  label?: string | boolean;
  style?: CSSProperties;
}

export function TextArea(props: TextAreaProps) {
  const { name, label, style, ...restProps } = props;

  return (
    <Box style={style}>
      <Field<string, HTMLTextAreaElement> name={name} label={label}>
        {({ fieldProps }) => (
          <AtlaskitTextArea
            {...fieldProps}
            {...restProps}
            isCompact
            isRequired
          />
        )}
      </Field>
    </Box>
  );
}
