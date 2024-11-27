import { Field } from '@atlaskit/form';
import { Inline } from '@atlaskit/primitives';
import Select from '@atlaskit/select';

import { useFormValuesStore } from '../../hooks';
import { DeleteButton, TextArea } from '../../shared';
import VariableField from './VariableField';

interface Props {
  index: number;
  showLabel?: boolean;
}

export default function VariableRow(props: Props) {
  const formValues = useFormValuesStore();

  return (
    <Inline space="space.050">
      <VariableField
        name={`variable[${props.index}]`}
        label={props.showLabel && 'Variable'}
        value={formValues.variable[props.index]}
        index={props.index}
      />

      <Field<string, HTMLSelectElement>
        name={`function[${props.index}]`}
        label={props.showLabel && 'Function'}
      >
        {({ fieldProps }) => (
          <Select
            {...fieldProps}
            options={[
              {
                label: 'COUNT',
                value: 'COUNT',
              },
            ]}
            value={formValues.function[props.index]}
            onChange={(event) => {
              /* istanbul ignore next */
              formValues.updateFormValue(
                'function',
                props.index,
                event?.value || '',
              );
            }}
            required
          />
        )}
      </Field>

      <TextArea
        name={`jql[${props.index}]`}
        label={props.showLabel && 'JQL'}
        value={formValues.jql[props.index]}
        spellCheck={false}
        onChange={(event) => {
          formValues.updateFormValue('jql', props.index, event.target.value);
        }}
        style={{ flexGrow: 1, maxWidth: 800 }}
      />

      <DeleteButton
        label="Delete variable"
        onClick={() => formValues.deleteVariable(props.index)}
        offsetLabel={props.showLabel}
      />
    </Inline>
  );
}
