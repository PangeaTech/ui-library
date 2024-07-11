import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './index';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    isSelect: { control: 'boolean' },
    required: { control: 'boolean' },
    value: { control: 'object' },
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
];

export const Default: Story = {
  args: {
    label: 'Example Dropdown',
    options,
    value: null
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    options,
    value: null,
    disabled: true
  }
};

export const WithError: Story = {
  args: {
    label: 'Dropdown with Error',
    options,
    value: null,
    error: true,
    helperText: 'This field is required'
  }
};

export const WithPreselectedValue: Story = {
  args: {
    label: 'Dropdown with Preselected Value',
    options,
    value: { value: '2', label: 'Option 2' }
  }
};
