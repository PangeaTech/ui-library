import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';
import { useState } from 'react';
import RadioGroup from './index';
import React from 'react';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' }
  }
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      args.onChange(newValue); // To trigger the Storybook action logger
    };

    return <RadioGroup {...args} value={value} onChange={handleChange} />;
  },
  args: {
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' }
    ],
    value: '1',
    onChange: () => {},
    RadioProps: {}
  }
};
