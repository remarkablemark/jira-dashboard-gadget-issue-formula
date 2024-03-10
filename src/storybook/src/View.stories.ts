import type { Meta, StoryObj } from '@storybook/react';

import FrontendView from '../../frontend/src/view/View';

const meta = {
  title: 'View',
  component: FrontendView,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FrontendView>;

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
