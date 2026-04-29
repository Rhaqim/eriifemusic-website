import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded transition-all font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burnished-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-deep-espresso disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary: 'bg-oxblood text-soft-ivory hover:bg-[#7D4744] shadow-sm hover:shadow-md disabled:hover:bg-oxblood',
      secondary: 'bg-transparent text-parchment hover:bg-cocoa-brown border border-border hover:border-burnished-bronze disabled:hover:bg-transparent disabled:hover:border-border'
    };

    const sizeStyles = {
      md: 'px-7 py-3 text-sm',
      lg: 'px-9 py-4 text-base'
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
