import React, { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;