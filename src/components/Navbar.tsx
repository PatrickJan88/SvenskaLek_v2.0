import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <ChefHat className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-2xl font-serif font-bold text-amber-800">
                Thai Delight
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-amber-900 hover:text-amber-600 font-medium transition-colors"
            >
              Contact
            </a>
            <a 
              href="#reservation" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Reserve a Table
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block py-2 px-3 text-amber-900 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="#menu" 
              className="block py-2 px-3 text-amber-900 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a 
              href="#about" 
              className="block py-2 px-3 text-amber-900 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="block py-2 px-3 text-amber-900 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="block py-2 px-3 text-amber-900 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#reservation" 
              className="block py-2 px-3 bg-amber-600 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;