import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './index';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Example Dropdown',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: '',
    onChange: (e) => console.log(e.target)
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: '',
    onChange: (e) => console.log(e.target),
    disabled: true
  }
};

export const WithError: Story = {
  args: {
    label: 'Dropdown with Error',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: '',
    onChange: (e) => console.log(e.target),
    errormsg: 'Something went wrong!'
  }
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Dropdown with Placeholder',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: '',
    onChange: (e) => console.log(e.target)
    // placeholder: 'Select an option...',
  }
};

export const WithPreselectedValue: Story = {
  args: {
    label: 'Dropdown with Preselected Value',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: { value: '2', label: 'Option 2' },
    onChange: (e) => console.log(e.target)
  }
};

export const MultipleSelection: Story = {
  args: {
    label: 'Multiple Selection Dropdown',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: [],
    onChange: (e) => console.log(e.target),
    multiple: true
  }
};

export const FreeSolo: Story = {
  args: {
    label: 'Free Solo Dropdown',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ],
    value: '',
    onChange: (e) => console.log(e.target),
    freeSolo: true
  }
};
