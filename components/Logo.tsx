
import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'minimal';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900';
  const accentColor = variant === 'minimal' ? 'text-slate-400' : 'text-cyan-400';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeMap[size]} aspect-square`}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[8]" strokeLinecap="round" strokeLinejoin="round">
          {/* Main K Structure */}
          <path d="M25 15 V85" className={textColor} />
          <path d="M25 50 L75 15" className={accentColor} />
          <path d="M25 50 L75 85" className={accentColor} />
          {/* Circuit nodes */}
          <circle cx="75" cy="15" r="5" fill="currentColor" className={accentColor} />
          <circle cx="75" cy="85" r="5" fill="currentColor" className={accentColor} />
          {/* Energy spark */}
          <path d="M25 50 H45" stroke="#B45309" strokeWidth="12" />
        </svg>
      </div>
      <div className={`flex flex-col justify-center`}>
        <span className={`font-heading font-extrabold tracking-tighter uppercase leading-none ${size === 'lg' ? 'text-2xl' : 'text-lg'} ${textColor}`}>
          Kell
        </span>
        <span className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] font-medium ${variant === 'light' ? 'text-slate-300' : 'text-slate-500'}`}>
          Electricals Ltd
        </span>
      </div>
    </div>
  );
};

export default Logo;
