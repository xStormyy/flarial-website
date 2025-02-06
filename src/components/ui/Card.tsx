import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'hover';
}

export function Card({
  children,
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'rounded-xl bg-surface p-6 border border-gray-200 dark:border-gray-800';
  
  const variants = {
    default: '',
    hover: 'transition-shadow duration-200 hover:shadow-lg',
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