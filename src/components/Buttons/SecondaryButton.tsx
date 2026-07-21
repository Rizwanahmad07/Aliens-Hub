import React from 'react';
import { Link } from 'react-router-dom';

interface SecondaryButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  to,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 border border-[var(--color-accent)] text-base font-medium rounded-md text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300";
  
  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};
