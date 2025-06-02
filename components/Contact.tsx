
import React from 'react';
import Section from './Section';
import EmailIcon from './icons/EmailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import MapPinIcon from './icons/MapPinIcon';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" icon={<EmailIcon className="w-8 h-8" />}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-brand-text-secondary mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="space-y-6 mb-10">
          {CONTACT_INFO.email && (
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-center text-brand-text hover:text-brand-accent transition-colors group">
              <EmailIcon className="w-5 h-5 mr-3 text-brand-accent group-hover:text-brand-accent-hover" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          )}
          {CONTACT_INFO.phone && (
             <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center justify-center text-brand-text hover:text-brand-accent transition-colors group">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-brand-accent group-hover:text-brand-accent-hover"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
          )}
          {CONTACT_INFO.location && (
            <div className="flex items-center justify-center text-brand-text">
              <MapPinIcon className="w-5 h-5 mr-3 text-brand-accent" />
              <span>{CONTACT_INFO.location}</span>
            </div>
          )}
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-brand-text-secondary hover:text-brand-accent transition-transform transform hover:scale-110"
          >
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-brand-text-secondary hover:text-brand-accent transition-transform transform hover:scale-110"
          >
            <GitHubIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
