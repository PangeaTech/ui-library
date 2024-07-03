import type { Meta, StoryObj } from '@storybook/react';

import Avatar from './index';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'text' },
    initials: { control: 'text' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'SR',
    size: 'medium'
  }
};

export const WithInitials: Story = {
  args: {
    alt: 'SR',
    size: 'small',
    initials: 'SR'
  }
};
