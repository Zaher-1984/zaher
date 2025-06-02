
import React from 'react';
import { Experience } from '../types';
import Section from './Section';
import { BriefcaseIcon } from './IconComponents';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => (
  <div className="mb-8 last:mb-0">
    <h3 className="text-xl font-semibold text-textPrimary">{item.title}</h3>
    <p className="text-md font-medium text-accent">{item.company} <span className="text-textSecondary font-normal">| {item.location}</span></p>
    <p className="text-sm text-textSecondary mb-3">{item.dates}</p>
    {/* Responsibilities list removed to only show headings */}
  </div>
);

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <Section title="Work Experience" icon={<BriefcaseIcon className="w-7 h-7" />}>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} item={exp} />
      ))}
    </Section>
  );
};

export default ExperienceSection;