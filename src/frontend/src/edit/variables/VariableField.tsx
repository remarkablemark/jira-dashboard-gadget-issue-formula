import { ErrorMessage } from '@atlaskit/form';
import { useState } from 'react';

import { useFormValuesStore } from '../../hooks';
import { TextArea, type TextAreaProps } from '../../shared';

interface Props extends TextAreaProps {
  index: number;
}

export default function VariableField(props: Props) {
  const { index, ...restProps } = props;
  const [error, setError] = useState('');
  const formValues = useFormValuesStore();

  function validate(value?: unknown) {
    if (!value || typeof value !== 'string') {
      setError('');
    } else if (!/^[a-zA-Z]/.test(value)) {
      setError('Variable must start with a letter');
    } else if (/\s/.test(value)) {
      setError('Variable must not contain whitespace');
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      setError('Variable must not contain special characters');
    } else {
      setError('');
    }
  }

  return (
    <>
      <TextArea
        {...restProps}
        spellCheck={false}
        onChange={(event) => {
          formValues.updateFormValue('variable', index, event.target.value);
          validate(event.target.value);
        }}
        style={{ flexGrow: 1, maxWidth: 200 }}
        isRequired
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
}
