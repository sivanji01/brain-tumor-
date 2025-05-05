import React, { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Methodology', path: '/methodology' },
    { title: 'Flowchart', path: '/flowchart' },
    { title: 'Code', path: '/code' },
    { title: 'Code Explanation', path: '/code-explanation' },
    { title: 'Output', path: '/output' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">BrainScan</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-blue-100 hover:bg-blue-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;