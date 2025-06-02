
import React from 'react';
import { TrainingItem } from '../types';
import Section from './Section';
import { SparklesIcon } from './IconComponents'; 

interface TrainingSectionProps {
  trainingCourses: TrainingItem[];
}

const TrainingItemDisplay: React.FC<{ item: TrainingItem }> = ({ item }) => (
  <div className="mb-4 last:mb-0">
    <h3 className="text-md font-semibold text-textPrimary">{item.name}</h3>
    {item.issuer && <p className="text-sm text-accent">{item.issuer}</p>}
    {item.details && <p className="text-sm text-textSecondary">{item.details}</p>}
  </div>
);

const TrainingSection: React.FC<TrainingSectionProps> = ({ trainingCourses }) => {
  return (
    <Section title="Training & Courses" icon={<SparklesIcon className="w-7 h-7" />}>
      {trainingCourses.map((course, index) => (
        <TrainingItemDisplay key={index} item={course} />
      ))}
    </Section>
  );
};

export default TrainingSection;
