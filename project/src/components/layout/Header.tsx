import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyServerIP = () => {
    navigator.clipboard.writeText('ffsmp.pl');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <span className={`font-poppins font-bold text-2xl logo-hover ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <span className="text-green-500">FF</span>SMP
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-montserrat font-semibold transition-colors duration-300 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-green-500' 
                    : 'text-white hover:text-green-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={copyServerIP}
                className={`font-poppins font-semibold px-6 py-2 rounded-md transition-all duration-300 ${
                  scrolled
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                {copySuccess ? 'Skopiowano!' : 'ffsmp.pl'}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 z-50">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-montserrat font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={copyServerIP}
                className="w-full font-poppins font-semibold bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
              >
                {copySuccess ? 'Skopiowano!' : 'ffsmp.pl'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;