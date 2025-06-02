import React from 'react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary via-slate-900 to-brand-secondary text-center relative overflow-hidden pt-20 md:pt-0">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#475569" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="max-w-3xl mx-auto">
          <img 
            src={HERO_DATA.profileImageUrl} 
            alt={HERO_DATA.name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 md:mb-8 border-4 border-brand-accent shadow-xl"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-brand-text">Hi, I'm </span>
            <span className="text-brand-accent">{HERO_DATA.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-text-secondary mb-6 font-medium">{HERO_DATA.title}</p>
          <p className="text-md md:text-lg text-brand-text-secondary mb-8 max-w-2xl mx-auto">
            {HERO_DATA.subtitle}
          </p>
          <div className="space-x-4">
            <a
              href="#contact"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href={HERO_DATA.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent hover:bg-brand-surface text-brand-accent font-semibold py-3 px-8 rounded-lg border-2 border-brand-accent transition-transform transform hover:scale-105"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-brand-text-secondary animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
