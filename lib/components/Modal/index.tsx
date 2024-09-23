import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Accept children to render dynamic content
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-2 flex gap-5 items-center justify-between w-full h-full max-w-5xl max-h-[90vh]">
        {children}

        {/* Close Button */}
        <button className="absolute top-4 right-4 text-black" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
