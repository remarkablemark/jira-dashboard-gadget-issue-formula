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
    data: [
      {
        label: 'One Hundredth',
        value: '0.01',
      },
      {
        label: 'One Tenth',
        value: '0.1',
      },
      {
        label: 'Zero',
        value: '0',
      },
      {
        label: 'One Hundred',
        value: '100',
      },
      {
        label: 'One Thousand',
        value: '1000',
      },
    ],
  },
};
