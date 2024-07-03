import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput, { IPasswordInputProps } from './index';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'changed' }, // Simulates onChange event
    sx: { control: 'object' }
  }
};

export default meta;

type Story = StoryObj<IPasswordInputProps>;

export const Default: Story = {
  args: {
    label: 'Password',
    onChange: (value: string) => console.log('Password changed:', value)
  }
};

export const WithError: Story = {
  args: {
    label: 'Password with Error',
    error: true,
    helperText: 'Incorrect password',
    onChange: (value: string) => console.log('Password changed:', value)
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Password',
    disabled: true,
    onChange: (value: string) => console.log('Password changed:', value)
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Password with Helper Text',
    helperText: 'Password must be at least 8 characters',
    onChange: (value: string) => console.log('Password changed:', value)
  }
};

export const CustomStyles: Story = {
  args: {
    label: 'Password with Custom Styles',
    sx: {
      '& .MuiInputBase-root': {
        backgroundColor: '#e0f7fa'
      }
    },
    onChange: (value: string) => console.log('Password changed:', value)
  }
};
