import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-secondary shadow-lg py-4' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-brand-accent hover:text-brand-accent-hover transition-colors">
          Zaher Alashker
        </a>
        <nav className="hidden md:flex space-x-6">
          {NAVIGATION_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-brand-text-secondary hover:text-brand-accent transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-brand-text-secondary hover:text-brand-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-secondary shadow-lg py-2">
          <nav className="flex flex-col items-center space-y-2">
            {NAVIGATION_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMobileMenu}
                className="text-brand-text-secondary hover:text-brand-accent transition-colors py-2 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
