import React, { useState, useEffect } from 'react';

interface NotificationProps {
  variant: 'popup' | 'drawer' | 'toast' | 'badge';
  type?: 'success' | 'error' | 'info' | 'warning';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  duration?: number;
  notifications?: Array<{ id: string; message: string; type?: string; time: Date }>;
  styles?: {
    container?: string;
    message?: string;
    drawer?: string;
    toast?: string;
    popup?: string;
    badge?: string;
  };
  isVisible?: boolean; // Added isVisible prop
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  variant,
  type = 'info',
  position = 'top-right',
  duration = 5000,
  notifications = [],
  styles = {},
  isVisible = true, // Default value is true
  onClose
}) => {
  const [visible, setVisible] = useState(isVisible);

  // Auto-hide for popup or toast
  useEffect(() => {
    if ((variant === 'popup' || variant === 'toast') && duration > 0 && visible) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [variant, duration, visible, onClose]);

  const getContainerClasses = () => {
    let baseClasses = `fixed p-4 shadow-lg rounded-lg text-sm ${styles.container || ''}`;
    let typeClasses = '';
    let positionClasses = '';

    switch (type) {
      case 'success':
        typeClasses = 'bg-green-100 text-green-800';
        break;
      case 'error':
        typeClasses = 'bg-red-100 text-red-800';
        break;
      case 'info':
        typeClasses = 'bg-blue-100 text-blue-800';
        break;
      case 'warning':
        typeClasses = 'bg-yellow-100 text-yellow-800';
        break;
      default:
        typeClasses = '';
    }

    switch (position) {
      case 'top-right':
        positionClasses = 'top-4 right-4';
        break;
      case 'top-left':
        positionClasses = 'top-4 left-4';
        break;
      case 'bottom-right':
        positionClasses = 'bottom-4 right-4';
        break;
      case 'bottom-left':
        positionClasses = 'bottom-4 left-4';
        break;
      default:
        positionClasses = '';
    }

    return `${baseClasses} ${typeClasses} ${positionClasses}`;
  };

  if (!visible) return null;

  switch (variant) {
    case 'popup':
      return (
        <div className={getContainerClasses()}>
          <div className={styles.message || ''}>Popup Notification</div>
        </div>
      );
    case 'toast':
      return (
        <div className={getContainerClasses()}>
          <div className={styles.message || ''}>Toast Notification</div>
        </div>
      );
    case 'drawer':
      return (
        <div className={getContainerClasses()}>
          <h2 className="text-lg font-semibold p-4">Notifications</h2>
          {notifications.map((notification) => (
            <div key={notification.id} className="p-4 border-b">
              {notification.message}
              <span className="text-xs text-gray-500 block">{notification.time.toLocaleTimeString()}</span>
            </div>
          ))}
        </div>
      );
    case 'badge':
      return <div className={getContainerClasses()}>{notifications.length}</div>;
    default:
      return null;
  }
};

export default Notification;
