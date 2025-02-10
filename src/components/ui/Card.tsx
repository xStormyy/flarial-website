import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'dark';
}

export function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl p-6 border border-gray-200 dark:border-gray-800';
  
  const variants = {
    default: 'bg-surface',
    hover: 'bg-surface transition-shadow duration-200 hover:shadow-lg',
    dark: 'bg-gray-900',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <div 
      className={combinedClassName}
      {...props}
    >
      {children}
    </div>
  );
}