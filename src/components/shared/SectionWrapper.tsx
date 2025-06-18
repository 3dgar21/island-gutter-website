interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

import * as React from 'react';

export default function SectionWrapper({
  id,
  title,
  subtitle,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 px-8 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-center text-gray-600 mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}