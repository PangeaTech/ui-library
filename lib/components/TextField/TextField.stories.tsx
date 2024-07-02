import type { Meta, StoryObj } from '@storybook/react';
import TextField from './index';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: { control: 'boolean' },
    errormsg: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: 'Default TextField'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextField',
    disabled: true
  }
};

export const WithError: Story = {
  args: {
    label: 'TextField with Error',
    errormsg: 'Invalid input'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'TextField with Helper Text',
    helperText: 'Please enter your name'
  }
};

export const WithValue: Story = {
  args: {
    label: 'TextField with Value',
    value: 'John Doe'
  }
};

export const WithCustomStyles: Story = {
  args: {
    label: 'TextField with Custom Styles',
    sx: {
      '& .MuiInputBase-root': {
        backgroundColor: '#e0f7fa'
      }
    }
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

export const WithEndAdornment: Story = {
  args: {
    label: 'TextField with End Adornment',
    inputProps: {
      endAdornment: <span>@example.com</span>
    }
  }
};
