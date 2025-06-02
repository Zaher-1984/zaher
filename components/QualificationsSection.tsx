
import React from 'react';
import Section from './Section';
import { ClipboardListIcon, CheckCircleIcon } from './IconComponents';

interface QualificationsSectionProps {
  qualificationsList: string[];
}

const QualificationsSection: React.FC<QualificationsSectionProps> = ({ qualificationsList }) => {
  return (
    <Section title="Qualifications" icon={<ClipboardListIcon className="w-7 h-7" />}>
      <ul className="space-y-3 text-textSecondary">
        {qualificationsList.map((qualification, index) => (
          <li key={index} className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
            <span>{qualification}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default QualificationsSection;
