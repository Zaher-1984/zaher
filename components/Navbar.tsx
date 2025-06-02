
import React, { useState, useEffect } from 'react';

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  name: string; // Prop remains for potential future use, but not currently displayed
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ name, links }) => {
  const [activeLink, setActiveLink] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      // Ensure links are available before proceeding
      if(links && links.length > 0) {
        links.forEach(link => {
          const section = document.querySelector(link.href);
          if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
            currentSection = link.href;
          }
        });
      }
      
      if (currentSection) {
        setActiveLink(currentSection);
      } else if (window.scrollY < window.innerHeight / 2 && links && links.length > 0 && links[0].href === '#home') {
         setActiveLink('#home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active link

    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(href);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  // const shortName = name.split(' ')[0]; // Name is no longer displayed

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Name display removed from here */}
          <div className="hidden md:flex items-center"> {/* Changed md:block to md:flex and items-center */}
            <div className="flex items-baseline space-x-1 lg:space-x-2"> {/* Removed ml-10 */}
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${activeLink === link.href 
                      ? 'text-accent-light bg-accent/10' 
                      : 'text-textSecondary hover:text-textPrimary hover:bg-card'
                    }`}
                  aria-current={activeLink === link.href ? 'page' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-start md:hidden"> {/* Container for mobile menu button, aligned left */}
             {/* Placeholder or logo for mobile if name is removed, for now, links will take full width */}
          </div>
          <div className="md:hidden flex items-center ml-auto"> {/* Ensure mobile button is on the right */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-textSecondary hover:text-textPrimary hover:bg-card focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${activeLink === link.href 
                    ? 'text-accent-light bg-accent/10' 
                    : 'text-textSecondary hover:text-textPrimary hover:bg-card'
                  }`}
                aria-current={activeLink === link.href ? 'page' : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
