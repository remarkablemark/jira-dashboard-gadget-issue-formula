import '@atlaskit/css-reset';

import type { Meta, StoryObj } from '@storybook/react';

import FrontendView from '../../frontend/src/view/View';

const meta: Meta<typeof FrontendView> = {
  title: 'View',
  component: FrontendView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    formValues: {
      name: 'name',
      description: 'description',
    },
  },
};