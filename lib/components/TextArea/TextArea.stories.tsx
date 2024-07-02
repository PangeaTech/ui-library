import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './index';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    disabled: { control: 'boolean' },
    errormsg: { control: 'text' },
    label: { control: 'text' },
    onChange: { action: 'changed' }
  }
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Text area'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Text area',
    disabled: true
  }
};

export const WithError: Story = {
  args: {
    label: 'Text area with error',
    errormsg: 'This field is required'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Text area with helper text',
    helperText: 'Write about yourself'
  }
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Text area with placeholder',
    placeholder: 'Write few lines....'
  }
};
