import type { Meta, StoryObj } from '@storybook/react';
import OtpInput from './index';

const meta = {
  title: 'Components/OtpInput',
  component: OtpInput,
  argTypes: {
    length: { control: 'number' },
    onChange: { action: 'changed' },
    label: { control: 'text' },
    disabled: { control: 'boolean' }
  }
} satisfies Meta<typeof OtpInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    length: 6,
    onChange: () => {},
    label: 'label'
  }
};

export const Disabled: Story = {
  args: {
    length: 6,
    onChange: () => {},
    label: 'label',
    disabled: true
  }
};
