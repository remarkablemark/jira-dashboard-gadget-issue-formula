import { Code } from '@atlaskit/code';
import { FormSection } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives';

import { useFormValuesStore } from '../../hooks';
import { AddButton } from '../../shared';
import VariableRow from './VariableRow';

export default function Variables() {
  const { variable, addVariable } = useFormValuesStore();

  return (
    <>
      <FormSection
        title="Variables"
        description={
          <>
            Data used in formula calculations. For example: <Code>a</Code> or{' '}
            <Code>var_1</Code>.
          </>
        }
      >
        {variable.map((_, index) => (
          <VariableRow key={index} index={index} showLabel={!index} />
        ))}
      </FormSection>

      <Box padding="space.050" />

      <AddButton label="Add variable" onClick={addVariable} />
    </>
  );
}
