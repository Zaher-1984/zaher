
import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="bg-brand-surface text-brand-accent py-2 px-4 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
      {name}
    </span>
  );
};

export default SkillBadge;
