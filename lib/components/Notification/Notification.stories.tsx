import type { Meta, StoryObj } from '@storybook/react';
import Notification from './index';
import React from 'react';

// Meta configuration for the Notification component
const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    variant: {
      control: 'select',
      options: ['popup', 'drawer', 'toast', 'badge']
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning']
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left']
    },
    duration: { control: 'number' },
    notifications: { control: 'object' },
    isVisible: { control: 'boolean' },
    onClose: { action: 'onClose' },
    styles: { control: 'object' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

// Snackbar variant story
export const Popup: Story = {
  args: {
    variant: 'popup',
    type: 'info',
    position: 'top-right',
    duration: 3000,
    notifications: [],
    isVisible: true,
    onClose: () => console.log('Popup closed')
  }
};

// Drawer variant story
export const Drawer: Story = {
  args: {
    variant: 'drawer',
    type: 'success',
    notifications: [
      { id: '1', message: 'New message received', type: 'info', time: new Date() },
      { id: '2', message: 'Server error occurred', type: 'error', time: new Date() }
    ],
    isVisible: true,
    onClose: () => console.log('Drawer closed')
  }
};

// Toast variant story
export const Toast: Story = {
  args: {
    variant: 'toast',
    type: 'warning',
    position: 'bottom-right',
    duration: 4000,
    notifications: [],
    isVisible: true,
    onClose: () => console.log('Toast closed')
  }
};

// Badge variant story
export const Badge: Story = {
  args: {
    variant: 'badge',
    notifications: [
      { id: '1', message: 'New message received', type: 'info', time: new Date() },
      { id: '2', message: 'New update available', type: 'success', time: new Date() }
    ],
    isVisible: true,
    onClose: () => console.log('Badge clicked')
  }
};

// Custom style story (styling override)
export const CustomStyled: Story = {
  args: {
    variant: 'popup',
    type: 'error',
    position: 'top-left',
    duration: 5000,
    notifications: [],
    isVisible: true,
    styles: {
      container: 'bg-pink-200 text-pink-800 border-2 border-pink-500 shadow-xl',
      message: 'font-bold text-lg'
    },
    onClose: () => console.log('Custom styled popup closed')
  }
};
