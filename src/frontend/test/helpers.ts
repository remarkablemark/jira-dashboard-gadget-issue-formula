import { fireEvent, screen } from '@testing-library/react';

export const clickButton = (name: RegExp | string) =>
  fireEvent.click(screen.getByRole('button', { name }));

export const changeLabelValue = (label: RegExp | string, value: string) =>
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
