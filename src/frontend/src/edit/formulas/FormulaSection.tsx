import { Inline } from '@atlaskit/primitives';

import { useFormValuesStore } from '../../hooks';
import { DeleteButton, TextArea, TextField } from '../../shared';

interface Props {
  index: number;
  showLabel?: boolean;
}

export default function FormulaSection(props: Props) {
  const formValues = useFormValuesStore();

  return (
    <Inline space="space.050">
      <TextArea
        name={`formula[${props.index}]`}
        label={props.showLabel && 'Math Formula'}
        value={formValues.formula[props.index]}
        spellCheck={false}
        onChange={(event) => {
          formValues.updateFormValue(
            'formula',
            props.index,
            event.target.value,
          );
        }}
        style={{ flexGrow: 1, maxWidth: 400 }}
        isRequired
      />

      <TextArea
        name={`label[${props.index}]`}
        label={props.showLabel && 'Label'}
        value={formValues.label[props.index]}
        onChange={(event) => {
          formValues.updateFormValue('label', props.index, event.target.value);
        }}
        style={{ flexGrow: 1, maxWidth: 300 }}
        isRequired
      />

      <TextField
        name={`decimal[${props.index}]`}
        label={props.showLabel && 'Decimals'}
        value={formValues.decimal[props.index]}
        onChange={(event) => {
          formValues.updateFormValue(
            'decimal',
            props.index,
            (event.target as HTMLInputElement).value,
          );
        }}
        type="number"
        min={0}
        width={55}
        isRequired
      />

      <DeleteButton
        label="Delete formula"
        onClick={() => formValues.deleteFormula(props.index)}
        offsetLabel={props.showLabel}
      />
    </Inline>
  );
}
