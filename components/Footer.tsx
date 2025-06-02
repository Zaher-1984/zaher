
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-8 text-textSecondary border-t border-borderLight mt-12">
      <p>&copy; {currentYear} Zaher Alashker. All rights reserved.</p>
      <p className="text-sm mt-1">Built with React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
