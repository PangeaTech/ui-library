import type { Meta, StoryObj } from '@storybook/react';
import Rating from './index';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'number' },
    onChange: { action: 'changed' } // Simulates onChange event
  }
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    label: 'Rating',
    value: 0,
    disabled: false,
    readOnly: false,
    onChange: (event, value) => console.log('Rating changed:', value)
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Rating',
    value: 3,
    disabled: true,
    readOnly: false
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-only Rating',
    value: 4,
    disabled: false,
    readOnly: true
  }
};

export const CustomLabel: Story = {
  args: {
    label: 'My Custom Rating',
    value: 2,
    disabled: false,
    readOnly: false
  }
};

export const InitialValue: Story = {
  args: {
    label: 'Initial Rating Value',
    value: 3,
    disabled: false,
    readOnly: false
  }
};
