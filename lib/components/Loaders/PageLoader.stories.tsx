import type { Meta, StoryObj } from '@storybook/react';
import PageLoader from './PageLoader';

const meta: Meta<typeof PageLoader> = {
  title: 'Components/PageLoader',
  component: PageLoader,
  argTypes: {
    loadingText: { control: 'text' },
    type: { control: 'text' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    loadingText: 'Loading...',
    type: 'loaderbar'
  }
};
