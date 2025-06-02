
import React from 'react';
import { PersonalInfo } from '../types';
import { MailIcon, MapPinIcon, ArrowDownTrayIcon } from './IconComponents'; // Removed ChatBubbleLeftRightIcon

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero: React.FC<HeroProps> = ({ personalInfo }) => {
  const cvPath = "/assets/zaher_alashker_cv.pdf"; // Ensure this path is correct

  return (
    <header className="py-16 sm:py-24 text-center lg:text-left mb-16">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-10">
        <img 
          src={personalInfo.profileImageUrl} 
          alt={personalInfo.name} 
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-accent shadow-lg flex-shrink-0"
        />
        <div className="lg:ml-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display text-textPrimary mb-2 leading-tight">{personalInfo.name}</h1>
          <p className="text-2xl sm:text-3xl text-accent-light font-semibold mb-6">{personalInfo.title}</p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-textSecondary text-lg mb-8">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-accent transition-colors duration-200">
              <MailIcon className="w-6 h-6 mr-2 text-accent" />
              {personalInfo.email}
            </a>
            {/* Skype removed from here */}
            <div className="flex items-center">
              <MapPinIcon className="w-6 h-6 mr-2 text-accent" />
              {personalInfo.location}
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-offset-2 focus:ring-offset-background"
              aria-label="View and Download CV"
            >
              <ArrowDownTrayIcon className="w-6 h-6 mr-3" />
              View & Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;