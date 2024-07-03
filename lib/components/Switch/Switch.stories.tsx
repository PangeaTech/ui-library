import { Meta, StoryObj } from '@storybook/react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    switchBgColor: { control: 'color' },
    labelColor: { control: 'color' },
    labelSize: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    labelWeight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'bold']
    },
    isLeftLabel: { control: 'boolean' },
    labelPlacement: {
      control: 'select',
      options: ['top', 'bottom', 'start', 'end']
    },
    onChange: { action: 'changed' }
  }
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Default Switch',
    switchBgColor: '',
    labelColor: 'black',
    labelSize: 'medium',
    labelWeight: 'medium',
    labelPlacement: 'end',
    isLeftLabel: false
  }
};

export const WithCustomBgColor: Story = {
  args: {
    label: 'Custom Background Color',
    switchBgColor: '#ff5722'
  }
};

export const WithLeftLabel: Story = {
  args: {
    label: 'Switch',
    leftlabel: 'Left Label',
    isLeftLabel: true
  }
};

export const WithDifferentLabelPlacement: Story = {
  args: {
    label: 'Switch',
    labelPlacement: 'start'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    disabled: true
  }
};
