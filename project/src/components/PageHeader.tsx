import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12 md:py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-blue-100 text-xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;