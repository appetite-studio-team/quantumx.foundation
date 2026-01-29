'use client';

import { useEffect } from 'react';
import { CheckCircleIcon } from './icons';

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
}

export function Toast({ show, message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={`toast ${show ? 'show' : ''}`}
      role="alert"
      aria-live="assertive"
    >
      <CheckCircleIcon className="toast-icon" />
      <span className="toast-message">{message}</span>
    </div>
  );
}
