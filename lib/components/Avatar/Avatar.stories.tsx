import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 24, 32, 40, 48, 56, 64]
      }
    },
    initials: { control: 'text' },
    image: { control: 'text' },
    online: { control: 'boolean' }
  }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
    online: false
  }
};

export const WithInitials: Story = {
  args: {
    size: 'md',
    initials: 'SR',
    online: false
  }
};

export const WithImage: Story = {
  args: {
    size: 'md',
    image: 'https://via.placeholder.com/40',
    online: false
  }
};

export const OnlineStatus: Story = {
  args: {
    size: 'md',
    initials: 'SR',
    online: true
  }
};
