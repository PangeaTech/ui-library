import type { Meta, StoryObj } from '@storybook/react';
import Search from './index';

const meta = {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' }
  }
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {}
  }
};
