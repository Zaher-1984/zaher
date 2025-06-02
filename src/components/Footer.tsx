import React from 'react';
import { HERO_DATA } from '../constants'; // To get the name

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-secondary py-8 text-center border-t border-slate-700">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-brand-text-secondary text-sm">
          &copy; {currentYear} {HERO_DATA.name}. All rights reserved.
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Crafted with <span className="text-red-500">❤️</span> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
