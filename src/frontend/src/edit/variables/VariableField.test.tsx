import { render, screen } from '@testing-library/react';

import { changeLabelValue } from '../../../test/helpers';
import VariableField from './VariableField';

const props = {
  index: 0,
  label: 'label',
  name: 'name',
};

it('renders textarea', () => {
  render(<VariableField {...props} />);
  expect(
    screen.getByRole('textbox', { name: props.label }),
  ).toBeInTheDocument();
});

describe('error', () => {
  it.each([undefined, null, ''])('does not render error for %p', (value) => {
    render(<VariableField {...props} />);
    // https://github.com/testing-library/react-testing-library/issues/924#issuecomment-856745092
    changeLabelValue(props.label, 'a');
    changeLabelValue(props.label, value as string);
    expect(screen.queryByText(/Variable/)).not.toBeInTheDocument();
  });

  it('validates variable starts with a letter', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, '0');
    expect(
      screen.getByText('Variable must start with a letter'),
    ).toBeInTheDocument();
  });

  it('validates variable does not contain whitespace', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, 'a ');
    expect(
      screen.getByText('Variable must not contain whitespace'),
    ).toBeInTheDocument();
  });

  it('validates variable does not contain special characters', () => {
    render(<VariableField {...props} />);
    changeLabelValue(props.label, 'a$');
    expect(
      screen.getByText('Variable must not contain special characters'),
    ).toBeInTheDocument();
  });
});
