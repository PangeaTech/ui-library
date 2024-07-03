import type { Meta, StoryObj } from '@storybook/react';
import UploadButton from './UploadButton';

const meta: Meta<typeof UploadButton> = {
  title: 'Components/UploadButton',
  component: UploadButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['file', 'folder', 'image', 'audio', 'video']
    },
    filesAllowedinFolder: {
      control: { type: 'select' },
      options: ['pdfOrDoc', 'jpgOrPng', 'doc', 'xlsOrXlsx']
    },
    label: { control: 'text' },
    onUpload: { action: 'uploaded' } // Ensure onUpload is in argTypes
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FileUpload: Story = {
  args: {
    type: 'file',
    label: 'Upload a File',
    onUpload: (files) => console.log('Uploaded files:', files) // Add onUpload handler
  }
};

export const FolderUpload: Story = {
  args: {
    type: 'folder',
    label: 'Upload a Folder',
    filesAllowedinFolder: 'pdfOrDoc',
    onUpload: (files) => console.log('Uploaded files:', files) // Add onUpload handler
  }
};

export const ImageUpload: Story = {
  args: {
    type: 'image',
    label: 'Upload an Image',
    onUpload: (files) => console.log('Uploaded files:', files) // Add onUpload handler
  }
};

export const AudioUpload: Story = {
  args: {
    type: 'audio',
    label: 'Upload Audio',
    onUpload: (files) => console.log('Uploaded files:', files) // Add onUpload handler
  }
};

export const VideoUpload: Story = {
  args: {
    type: 'video',
    label: 'Upload Video',
    onUpload: (files) => console.log('Uploaded files:', files) // Add onUpload handler
  }
};
