import ButtonGroup from '@atlaskit/button/button-group';
import LoadingButton from '@atlaskit/button/loading-button';
import Button from '@atlaskit/button/new';
import Form, { FormFooter } from '@atlaskit/form';
import { view } from '@forge/bridge';
import { useCallback } from 'react';

import { DEV } from '../env';
import { log } from '../helpers';
import { useFormValues, useGadgetConfiguration } from '../hooks';
import type { FormValues } from '../types';
import Formulas from './formulas';
import Variables from './variables';

export default function Edit() {
  const { formValues: oldFormValues } = useGadgetConfiguration();
  const formValues = useFormValues();

  const handleSubmit = useCallback(() => {
    /* istanbul ignore if */
    if (DEV) {
      log.info('submit:', formValues);
    }
    view.submit(formValues);
  }, [formValues]);

  const handleCancel = useCallback(() => {
    /* istanbul ignore if */
    if (DEV) {
      log.info('cancel');
    }
    if (formValues) {
      view.submit(oldFormValues);
    }
  }, [formValues, oldFormValues]);

  return (
    <Form<FormValues> onSubmit={handleSubmit}>
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

              <Button onClick={handleCancel}>Cancel</Button>
            </ButtonGroup>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
