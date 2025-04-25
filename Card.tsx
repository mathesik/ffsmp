import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = 'md',
  padding = 'md',
  hover = false,
}) => {
  const shadowStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };
  
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-8',
  };
  
  const hoverStyles = hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg' : '';
  
  return (
    <div className={`bg-white rounded-lg ${shadowStyles[shadow]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
