import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './index';
import React from 'react';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
    summary: { control: 'text' },
    sxSummary: { control: 'object' },
    sxDetails: { control: 'object' }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    summary: 'Accordion summary content goes here.'
  }
};

export const CustomStyles: Story = {
  args: {
    title: 'Custom Styled Accordion',
    summary: 'This accordion has custom styles applied to its summary and details.',
    sxSummary: {
      backgroundColor: '#e0f7fa',
      color: '#00796b'
    },
    sxDetails: {
      backgroundColor: '#f1f8e9',
      color: '#33691e'
    }
  }
};

export const LongContent: Story = {
  args: {
    title: 'Accordion with Long Content',
    summary: (
      <div>
        <p>This is a longer content within the accordion. It can contain multiple lines and different elements.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  }
};

export const RichContent: Story = {
  args: {
    title: (
      <span>
        <strong>Rich Content Title</strong>
      </span>
    ),
    summary: (
      <div>
        <h4>Summary with rich content</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    )
  }
};
