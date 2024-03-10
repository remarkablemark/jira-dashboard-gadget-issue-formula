import '@atlaskit/css-reset';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import FrontendEdit from '../../frontend/src/edit/Edit';
import type { View } from '../../frontend/src/types';

const meta: Meta<typeof FrontendEdit> = {
  title: 'Edit',
  component: FrontendEdit,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    formValues: {
      label: '',
      jql: '',
    },
    view: {
      close: fn(),
      submit: fn(),
    } as unknown as View,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const EditUnfilled: Story = {};

export const EditFilled: Story = {
  args: {
    formValues: {
      label:
        'What issues are unassigned and have not been updated in the last day?',
      jql: 'assignee is EMPTY and created < -1d',
    },
  },
};
