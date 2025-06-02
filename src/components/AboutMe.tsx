import React from 'react';
import Section from './Section';
import UserIcon from './icons/UserIcon';
import { ABOUT_ME_DATA } from '../constants';

const AboutMe: React.FC = () => {
  return (
    <Section id="about" title="About Me" icon={<UserIcon className="w-8 h-8" />}>
      <div className="space-y-6 text-brand-text-secondary text-lg leading-relaxed">
        <p>{ABOUT_ME_DATA.introduction}</p>
        <p>{ABOUT_ME_DATA.passion}</p>
        <p>{ABOUT_ME_DATA.philosophy}</p>
      </div>
    </Section>
  );
};

export default AboutMe;
