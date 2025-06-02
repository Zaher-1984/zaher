
import React from 'react';
import { PersonalInfo } from '../types';
import Section from './Section';
import { UserCircleIcon, IdentificationIcon, GlobeAltIcon } from './IconComponents';

interface AboutProps {
  careerObjective: string;
  personalInfo: Pick<PersonalInfo, 'dateOfBirth' | 'gender' | 'maritalStatus' | 'nationality' | 'languages'>;
}

const About: React.FC<AboutProps> = ({ careerObjective, personalInfo }) => {
  return (
    <Section title="About Me" icon={<UserCircleIcon className="w-7 h-7" />}>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-accent mb-3">Career Objective</h3>
        <p className="text-textSecondary leading-relaxed">{careerObjective}</p>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-accent mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-textSecondary">
          <p><strong className="font-medium text-textPrimary">Date of Birth:</strong> {personalInfo.dateOfBirth}</p>
          <p><strong className="font-medium text-textPrimary">Gender:</strong> {personalInfo.gender}</p>
          <p><strong className="font-medium text-textPrimary">Marital Status:</strong> {personalInfo.maritalStatus}</p>
          <p><strong className="font-medium text-textPrimary">Nationality:</strong> {personalInfo.nationality}</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-accent mb-4 flex items-center">
            <GlobeAltIcon className="w-6 h-6 mr-2 text-accent"/> Languages
        </h3>
        <ul className="space-y-2">
          {personalInfo.languages.map((lang, index) => (
            <li key={index} className="flex items-center text-textSecondary">
              <span className="font-medium text-textPrimary w-24">{lang.lang}:</span>
              <span>{lang.proficiency}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default About;
