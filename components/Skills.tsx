
import React from 'react';
import Section from './Section';
import SkillBadge from './SkillBadge';
import CodeIcon from './icons/CodeIcon';
import { SKILLS_DATA } from '../constants';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  const categorizedSkills = SKILLS_DATA.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  // Define display order for categories
  const categoryOrder: Skill['category'][] = ['Languages', 'Frontend', 'Backend', 'Databases', 'DevOps & Tools', 'Other'];

  return (
    <Section id="skills" title="My Skills" icon={<CodeIcon className="w-8 h-8" />} className="bg-brand-secondary">
      <div className="space-y-10">
        {categoryOrder.map(categoryName => {
          const skillsInCategory = categorizedSkills[categoryName];
          if (!skillsInCategory || skillsInCategory.length === 0) {
            return null;
          }
          return (
            <div key={categoryName}>
              <h3 className="text-2xl font-semibold text-brand-text mb-6">{categoryName}</h3>
              <div className="flex flex-wrap gap-3">
                {skillsInCategory.map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
