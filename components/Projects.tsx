import React from 'react';
import Section from './Section';
import Card from './Card';
import ProjectSectionIcon from './icons/CodeIcon'; // Using default import and naming it ProjectSectionIcon
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="My Projects" icon={<ProjectSectionIcon className="w-8 h-8" />} className="bg-brand-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project: Project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.technologies}
            imageUrl={project.imageUrl}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;