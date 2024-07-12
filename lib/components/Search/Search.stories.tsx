import type { Meta, StoryObj } from '@storybook/react';
import Search from './index';

const meta = {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
    micIcon: { control: 'boolean' }
  }
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {}
  }
};

export const MicIcon: Story = {
  args: {
    onChange: () => {},
    micIcon: true
  }
};

export const Disabled: Story = {
  args: {
    onChange: () => {},
    disabled: true
  }
};
