
import React from 'react';
import { EducationItem as EducationType } from '../types'; // Renamed to avoid conflict
import Section from './Section';
import { AcademicCapIcon } from './IconComponents';

interface EducationSectionProps {
  educationHistory: EducationType[];
}

const EducationItemDisplay: React.FC<{ item: EducationType }> = ({ item }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-xl font-semibold text-textPrimary">{item.degree}</h3>
    <p className="text-md font-medium text-accent">{item.institution}</p>
    {item.department && <p className="text-sm text-textSecondary">{item.department}</p>}
    <p className="text-sm text-textSecondary">{item.year}</p>
  </div>
);

const EducationSection: React.FC<EducationSectionProps> = ({ educationHistory }) => {
  return (
    <Section title="Education" icon={<AcademicCapIcon className="w-7 h-7" />}>
      {educationHistory.map((edu, index) => (
        <EducationItemDisplay key={index} item={edu} />
      ))}
    </Section>
  );
};

export default EducationSection;
