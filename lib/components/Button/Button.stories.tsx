import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button'
  }
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    color: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    color: 'secondary'
  }
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true
  }
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true
  }
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small'
  }
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'medium'
  }
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large'
  }
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true
  }
};

export const StartIcon: Story = {
  args: {
    children: 'Start Icon Button',
    startIcon: (
      <span role="img" aria-label="icon">
        🚀
      </span>
    )
  }
};

export const EndIcon: Story = {
  args: {
    children: 'End Icon Button',
    endIcon: (
      <span role="img" aria-label="icon">
        🎉
      </span>
    )
  }
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text'
  }
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined'
  }
};

export const Contained: Story = {
  args: {
    children: 'Contained Button',
    variant: 'contained'
  }
};

export const CustomStyles: Story = {
  args: {
    children: 'Custom Styled Button',
    sx: {
      backgroundColor: '#e0f7fa',
      color: '#00695c',
      '&:hover': {
        backgroundColor: '#b2dfdb'
      }
    }
  }
};
