import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    onChange: { action: 'changed' }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default checkbox',
    onChange: (e) => console.log(e.target)
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true
  }
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true
  }
};
