import React, { useState } from 'react';
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
  render: (args) => {
    const [checked, setChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked);
    };

    return <Checkbox {...args} checked={checked} onChange={handleChange} />;
  },
  args: {
    label: 'Default checkbox'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
    checked: true
  }
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true
  }
};
