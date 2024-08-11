import { useFormValuesStore } from '../store/formValuesStore';

export function useFormValues() {
  const formValues = useFormValuesStore();

  return {
    decimal: formValues.decimal,
    formula: formValues.formula,
    function: formValues.function,
    jql: formValues.jql,
    label: formValues.label,
    prefix: formValues.prefix,
    variable: formValues.variable,
  };
}
