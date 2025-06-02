
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children, icon }) => (
  <section className="mb-10 bg-card p-6 sm:p-8 rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
    <div className="flex items-center mb-6 pb-3 border-b-2 border-accent">
      {icon && <span className="mr-3 text-accent">{icon}</span>}
      <h2 className="text-2xl sm:text-3xl font-semibold text-accent">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

export default Section;
