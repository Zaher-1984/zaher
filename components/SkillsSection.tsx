import React from 'react';
import { SkillCategory } from '../types';
import Section from './Section';
import { CogIcon } from './IconComponents';

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  return (
    <Section title="Technical Skills" icon={<CogIcon className="w-7 h-7" />}>
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <h3 className="text-xl font-semibold text-textPrimary mb-4">{category.categoryName}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="bg-accent/10 text-accent-light py-2 px-4 rounded-full text-sm font-medium shadow-sm hover:bg-accent/20 transition-colors duration-200">
                {skill.name}
                {skill.details && <span className="ml-1 text-xs opacity-75">({skill.details})</span>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default SkillsSection;