import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TabsComponent from './index';
import { Box } from '@mui/material';

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/TabsComponent',
  component: TabsComponent,
  argTypes: {
    indicatorColor: {
      control: 'select',
      options: ['secondary', 'primary']
    },
    textColor: {
      control: 'select',
      options: ['secondary', 'primary', 'inherit']
    },
    variant: {
      control: 'select',
      options: ['standard', 'scrollable', 'fullWidth']
    },
    scrollButtons: {
      control: 'select',
      options: ['auto', 'desktop', 'on', 'off']
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    }
  }
};

export default meta;

type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: <Box>Content 1</Box> },
      { label: 'Tab 2', content: <Box>Content 2</Box> },
      { label: 'Tab 3', content: <Box>Content 3</Box> }
    ]
  }
};

export const Scrollable: Story = {
  args: {
    variant: 'scrollable',
    scrollButtons: 'auto',
    tabs: [
      { label: 'Tab 1', content: <Box>Content 1</Box> },
      { label: 'Tab 2', content: <Box>Content 2</Box> },
      { label: 'Tab 3', content: <Box>Content 3</Box> },
      { label: 'Tab 4', content: <Box>Content 4</Box> },
      { label: 'Tab 5', content: <Box>Content 5</Box> },
      { label: 'Tab 6', content: <Box>Content 6</Box> },
      { label: 'Tab 7', content: <Box>Content 7</Box> }
    ]
  }
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    tabs: [
      { label: 'Tab 1', content: <Box>Content 1</Box> },
      { label: 'Tab 2', content: <Box>Content 2</Box> },
      { label: 'Tab 3', content: <Box>Content 3</Box> }
    ]
  }
};

export const WithCustomColors: Story = {
  args: {
    indicatorColor: 'secondary',
    textColor: 'primary',
    tabs: [
      { label: 'Tab 1', content: <Box>Content 1</Box> },
      { label: 'Tab 2', content: <Box>Content 2</Box> },
      { label: 'Tab 3', content: <Box>Content 3</Box> }
    ]
  }
};
