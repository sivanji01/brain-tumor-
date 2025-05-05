import React from 'react';
import { Github, ExternalLink, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Brain Tumor Detection Project</h3>
            <p className="text-blue-200 text-sm mt-1">
              Medical Image Processing - 2023
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
              aria-label="Project Link"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-blue-200 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-blue-800 pt-4 text-center text-sm text-blue-300">
          <p>© {new Date().getFullYear()} Brain Tumor Detection Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;