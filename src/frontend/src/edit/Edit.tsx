import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/new';
import Form, { FormFooter } from '@atlaskit/form';
import { view } from '@forge/bridge';

import { log } from '../helpers';
import { useFormValues, useGadgetConfiguration } from '../hooks';
import type { FormValues } from '../types';
import Formulas from './formulas';
import Variables from './variables';

export default function Edit() {
  const { formValues: oldFormValues } = useGadgetConfiguration();
  const formValues = useFormValues();

  return (
    <Form<FormValues>
      onSubmit={() => {
        import.meta.env.DEV && log.info('submit:', formValues);
        view.submit(formValues);
      }}
    >
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Variables />
          <Formulas />

          <FormFooter align="start">
            <ButtonGroup label="Form submit options">
              <LoadingButton
                type="submit"
                appearance="primary"
                isLoading={submitting}
              >
                Save
              </LoadingButton>

              <Button
                onClick={() => {
                  import.meta.env.DEV && log.info('cancel');
                  formValues && view.submit(oldFormValues);
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
