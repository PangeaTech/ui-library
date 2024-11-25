import type { Meta, StoryObj } from '@storybook/react';
import Popup from './index';
import React from 'react';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['snackbar', 'drawer', 'floating', 'inline']
    },
    type: {
      control: 'select',
      options: ['error', 'success', 'info', 'warning']
    },
    title: { control: 'text' },
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    autoClose: { control: 'number' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Snackbar: Story = {
  args: {
    variant: 'snackbar',
    type: 'info',
    title: 'Snackbar Notification',
    message: 'This is a snackbar-style popup.',
    isVisible: true,
    autoClose: 3000,
    onClose: () => console.log('Snackbar closed')
  }
};

export const Drawer: Story = {
  args: {
    variant: 'drawer',
    type: 'success',
    title: 'Drawer Notification',
    message: 'This is a drawer-style popup.',
    isVisible: true,
    autoClose: 5000,
    onClose: () => console.log('Drawer closed')
  }
};

export const Floating: Story = {
  args: {
    variant: 'floating',
    type: 'warning',
    title: 'Floating Notification',
    message: 'This is a floating-style popup.',
    isVisible: true,
    autoClose: 4000,
    onClose: () => console.log('Floating popup closed')
  }
};

export const Inline: Story = {
  args: {
    variant: 'inline',
    type: 'error',
    title: 'Inline Notification',
    message: 'This is an inline-style popup.',
    isVisible: true,
    onClose: () => console.log('Inline popup closed')
  }
};
