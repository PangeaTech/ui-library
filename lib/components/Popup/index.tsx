import React, { useEffect } from 'react';
import classNames from 'classnames';

type PopupVariant = 'snackbar' | 'drawer' | 'floating' | 'inline';
type PopupType = 'error' | 'success' | 'info' | 'warning';

interface PopupProps {
  variant: PopupVariant; // Determines the style/placement of the popup
  type: PopupType; // Determines the default color scheme
  title: React.ReactNode; // Title can also be a ReactNode for rich content
  message?: React.ReactNode; // Allows for plain text or JSX
  isVisible: boolean; // Controls the visibility of the popup
  autoClose?: number; // Auto close timeout in milliseconds
  onClose: () => void; // Callback for when the popup is closed
  containerClassName?: string; // Custom class for the container
  titleClassName?: string; // Custom class for the title
  messageClassName?: string; // Custom class for the message
}

const Popup: React.FC<PopupProps> = ({
  variant,
  type,
  title,
  message,
  isVisible,
  autoClose,
  onClose,
  containerClassName = '',
  titleClassName = '',
  messageClassName = ''
}) => {
  // Handle auto-close behavior
  useEffect(() => {
    if (isVisible && autoClose) {
      const timer = setTimeout(onClose, autoClose);
      return () => clearTimeout(timer);
    }
  }, [isVisible, autoClose, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    error: 'bg-gradient-to-r from-red-500 to-red-400 text-white border-red-600',
    success: 'bg-gradient-to-r from-green-500 to-green-400 text-white border-green-600',
    info: 'bg-gradient-to-r from-blue-500 to-blue-400 text-white border-blue-600',
    warning: 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-black border-yellow-600'
  };

  const variantStyles = {
    snackbar: 'fixed bottom-4 left-4 max-w-sm rounded-lg shadow-lg animate-fade-in',
    drawer: 'fixed top-0 right-0 h-full w-1/3 max-w-md shadow-lg rounded-l-lg animate-slide-in',
    floating: 'fixed top-4 right-4 max-w-sm rounded-lg shadow-lg animate-fade-in',
    inline: 'relative max-w-full border rounded-lg'
  };

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={classNames(
        'p-4 flex items-start space-x-4',
        typeStyles[type],
        variantStyles[variant],
        containerClassName // Allow users to override styles
      )}
    >
      <div className="flex-grow">
        <div className={classNames('text-lg font-semibold', titleClassName)}>{title}</div>
        {message && <div className={classNames('mt-2 text-sm', messageClassName)}>{message}</div>}
      </div>
      <button
        onClick={onClose}
        aria-label="Close popup"
        className="ml-4 text-white bg-opacity-50 hover:bg-opacity-75 rounded-full w-8 h-8 flex items-center justify-center"
      >
        ✖️
      </button>
    </div>
  );
};

export default Popup;
