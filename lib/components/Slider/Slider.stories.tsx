import { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index';
import { Icon } from '@mui/material';
import { VolumeDown } from '@mui/icons-material';
import React from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    label: { control: 'text' },
    sliderTrackColor: { control: 'color' },
    sliderThumbColor: { control: 'color' },
    valueLabelColor: {
      control: {
        color: 'color',
        background: 'color'
      },
      defaultValue: {
        color: 'white',
        background: 'dodgerBlue'
      }
    },
    leftIcon: { control: 'element' },
    rightIcon: { control: 'element' },
    disabled: { control: 'boolean' }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: 'Volume'
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Slider',
    disabled: true
  }
};

export const CustomColors: Story = {
  args: {
    label: 'Custom Colors',
    sliderTrackColor: 'green',
    sliderThumbColor: 'red',
    valueLabelColor: {
      color: 'yellow',
      background: 'purple'
    }
  }
};

export const Discrete: Story = {
  args: {
    label: 'Discrete Slider',
    step: 10,
    marks: true,
    valueLabelDisplay: 'auto'
  }
};

export const Range: Story = {
  args: {
    label: 'Range Slider',
    value: [20, 40],
    onChange: (event: Event, newValue: number | number[]) => {
      console.log(newValue);
    },
    valueLabelDisplay: 'auto'
  }
};

export const WithIcons: Story = {
  args: {
    label: 'Slider with Icons',
    leftIcon: <VolumeDown />,
    rightIcon: <VolumeDown />
  }
};

export const WithCustomValueLabelColor: Story = {
  args: {
    label: 'Slider with Custom Value Label Color',
    valueLabelColor: {
      color: 'black',
      background: 'lightgrey'
    }
  }
};
