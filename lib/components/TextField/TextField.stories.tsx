import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';
import React from 'react';
import { AccountCircle } from '@mui/icons-material';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    label: { control: 'text' },
    onChange: { action: 'changed' },
    readOnly: { control: 'boolean' },
    startIcon: { control: 'object' }
  }
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Label',
    className: 'bg-red-200'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextField',
    disabled: true,
    placeholder: 'hello'
  }
};

export const WithError: Story = {
  args: {
    label: 'TextField with Error',
    error: true,
    helperText: 'This field is required'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'TextField with Helper Text',
    helperText: 'Please enter your name'
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'TextField with Value',
    value: 'John Doe',
    readOnly: true
  }
};

export const WithCustomStyles: Story = {
  args: {
    label: 'TextField with Custom Styles'
  }
};

export const WithPlaceholder: Story = {
  args: {
    label: 'TextField with Placeholder',
    placeholder: 'Enter your text here'
  }
};

export const Multiline: Story = {
  args: {
    label: 'Multiline TextField',
    multiline: true,
    rows: 4
  }
};

export const WithStartIcon: Story = {
  args: {
    label: 'TextField with Start Icon',
    startIcon: <AccountCircle />,
    placeholder: 'Enter your username'
  }
};
