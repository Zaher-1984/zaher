import React from 'react';
import Section from './Section';
import Card from './Card';
import BriefcaseIcon from './icons/BriefcaseIcon';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" icon={<BriefcaseIcon className="w-8 h-8" />}>
      <div className="space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 transform md:-translate-x-1/2 hidden sm:block"></div>
        
        {EXPERIENCE_DATA.map((item: ExperienceItem, index: number) => (
          <div key={index} className="relative pl-10 md:pl-0 md:flex md:items-start group">
            {/* Timeline dot */}
            <div className="absolute left-[10px] md:left-1/2 top-1 w-6 h-6 bg-brand-surface border-2 border-brand-accent rounded-full transform -translate-x-1/2 hidden sm:block"></div>
            
            <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}>
                <Card
                    title={item.role}
                    subtitle={item.company}
                    dateRange={item.duration}
                    descriptionItems={item.description}
                    tags={item.technologies}
                    className="mb-0 md:mb-8" // No margin bottom on mobile to use parent's space-y, but margin on md for timeline layout
                />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
