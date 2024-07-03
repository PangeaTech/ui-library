import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';

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
  args: {
    label: 'label',
    options: [],
    value: 'value',
    onChange: () => {},
    RadioProps: {}
  }
};
