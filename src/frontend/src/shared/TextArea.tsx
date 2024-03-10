import { Field } from '@atlaskit/form';
import { Box, xcss } from '@atlaskit/primitives';
import AtlaskitTextArea from '@atlaskit/textarea';

const formulaStyles = xcss({
  flexGrow: 1,
});

interface Props {
  name: string;
  label?: string | boolean;
}

export function TextArea(props: Props) {
  return (
    <Box xcss={formulaStyles}>
      <Field<string, HTMLTextAreaElement> name={props.name} label={props.label}>
        {({ fieldProps }) => (
          <AtlaskitTextArea
            {...fieldProps}
            resize="auto"
            isCompact
            isRequired
          />
        )}
      </Field>
    </Box>
  );
}
