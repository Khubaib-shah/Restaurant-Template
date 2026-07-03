import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variants = {
    primary: 'bg-brand-primary  text-text-inverse border-transparent',
    secondary: 'bg-gray-100 text-text-primary border-transparent',
    outline: 'text-text-primary border border-brand-primary/20 bg-transparent',
    success: 'bg-green-100 text-green-800 border-transparent',
    warning: 'bg-yellow-100 text-yellow-800 border-transparent',
    danger: 'bg-red-100 text-red-800 border-transparent'
  };

  return (
    <div
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
