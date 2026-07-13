import React from 'react';

const SectionHeading = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <p className="text-[#3b82f6] font-bold text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-[#1e3a8a] text-3xl md:text-4xl font-extrabold mb-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
