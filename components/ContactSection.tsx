
import React from 'react';
import Section from './Section';
import { MailIcon, LinkedInIcon } from './IconComponents';

interface ContactSectionProps {
  email: string;
  linkedinUrl?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ email, linkedinUrl }) => {
  return (
    <Section title="Get In Touch" icon={<MailIcon className="w-7 h-7" />}>
      <p className="text-textSecondary text-lg mb-8 text-center">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
        <a 
          href={`mailto:${email}`}
          className="flex items-center text-lg sm:text-xl text-textPrimary hover:text-accent transition-colors duration-200 p-3 sm:p-4 bg-card hover:bg-borderLight rounded-lg shadow-md"
          aria-label={`Email ${email}`}
        >
          <MailIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-accent" />
          <span>{email}</span>
        </a>
        {linkedinUrl && (
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg sm:text-xl text-textPrimary hover:text-accent transition-colors duration-200 p-3 sm:p-4 bg-card hover:bg-borderLight rounded-lg shadow-md"
            aria-label="View LinkedIn Profile"
          >
            <LinkedInIcon className="w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3 text-accent" />
            <span>LinkedIn Profile</span>
          </a>
        )}
      </div>
    </Section>
  );
};

export default ContactSection;