import { HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Container({
  children,
  size = 'lg',
  className = '',
  ...props
}: ContainerProps) {
  const baseStyles = 'mx-auto px-4 w-full';
  
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
  };

  const combinedClassName = `${baseStyles} ${sizes[size]} ${className}`;

  return (
    <div 
      className={combinedClassName}
      {...props}
    >
      {children}
    </div>
  );
}