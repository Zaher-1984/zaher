import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '', icon }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="flex items-center mb-8 md:mb-12">
          {icon && <span className="mr-3 text-brand-accent text-3xl md:text-4xl">{icon}</span>}
          <h2 className={`text-3xl md:text-4xl font-bold text-brand-text ${titleClassName}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
