import { useRef } from 'react';
import Button from './index';

export type uploadType = 'file' | 'folder' | 'image' | 'audio' | 'video';
export interface IFileUpload {
  onUpload: (files: File[]) => void;
  type: uploadType;
  filesAllowedinFolder?: 'pdfOrDoc' | 'jpgOrPng' | 'doc' | 'xlsOrXlsx';
  label: string;
}

const UploadButton: React.FC<IFileUpload> = ({ onUpload, type, filesAllowedinFolder, label }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isFileDocOrPdf = (file: File) => {
    const validFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validFileTypes.includes(file.type);
  };

  const isFileJpgOrPng = (file: File) => {
    const validFileTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    return validFileTypes.includes(file.type);
  };

  const isFileDoc = (file: File) => {
    const validFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validFileTypes.includes(file.type);
  };

  const validatationFilter = (file: File) => {
    if (type === 'folder' && file.webkitRelativePath.includes('/')) {
      if (filesAllowedinFolder === 'doc' && isFileDoc(file)) {
        return true;
      }
      if (filesAllowedinFolder === 'pdfOrDoc' && isFileDocOrPdf(file)) {
        return true;
      }
      if (filesAllowedinFolder === 'jpgOrPng' && isFileJpgOrPng(file)) {
        return true;
      }
      return false;
    }

    if (type === 'file' && isFileDoc(file)) {
      return true;
    }

    if (type === 'file' && isFileDocOrPdf(file)) {
      return true;
    }

    if (type === 'image' && isFileJpgOrPng(file)) {
      return true;
    }
    return false;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = e.target.files;
      const validFiles = Array.from(fileList).filter(validatationFilter);
      if (validFiles.length > 0) {
        onUpload(validFiles);
      } else {
        alert('Please select valid files');
      }
      e.target.value = ''; // Clearing value to reuse the add button without refresh
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const folderProps = {
    webkitdirectory: 'webkitdirectory',
    mozdirectory: 'mozdirectory'
  };

  const docProps = {
    accept: 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    multiple: true
  };

  const docorPdfProps = {
    accept: 'application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    multiple: true
  };
  const imageProps = {
    accept: 'image/jpeg, image/png, image/jpg',
    multiple: true
  };

  let inputProps = {};
  // Dynamically set the input props based on input type
  switch (type) {
    case 'folder':
      inputProps = folderProps;
      break;
    case 'file':
      inputProps = filesAllowedinFolder === 'doc' ? docProps : docorPdfProps;
      break;
    case 'image':
      inputProps = imageProps;
      break;
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} {...inputProps} />
      <Button onClick={handleButtonClick}>{label}</Button>
    </div>
  );
};

export default UploadButton;
