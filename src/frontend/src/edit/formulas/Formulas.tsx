import { Code } from '@atlaskit/code';
import { FormSection } from '@atlaskit/form';
import { Box } from '@atlaskit/primitives';

import { useFormValuesStore } from '../../hooks';
import { AddButton } from '../../shared';
import FormulaRow from './FormulaRow';

export default function Formulas() {
  const { formula, addFormula } = useFormValuesStore();

  return (
    <>
      <FormSection
        title="Formulas"
        description={
          <>
            Mathematical calculations using variables. For example:{' '}
            <Code>a + b</Code> or <Code>(var_1 / var_2) * 100</Code>.
          </>
        }
      >
        {formula.map((_, index) => (
          <FormulaRow key={index} index={index} showLabel={!index} />
        ))}
      </FormSection>

      <Box padding="space.050" />

      <AddButton label="Add formula" onClick={addFormula} />
    </>
  );
}
