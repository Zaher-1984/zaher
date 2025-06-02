import type { NavLink, Skill, ExperienceItem, Project, ContactInfo } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_DATA = {
  name: "Zaher Alashker",
  title: "Full Stack Developer", // Current title, skill changes might suggest a review later
  subtitle: "Crafting seamless digital experiences with modern web technologies. Passionate about clean code, innovative solutions, and continuous learning.",
  profileImageUrl: "https://picsum.photos/seed/zaherprofile/400/400", // Placeholder
  cvLink: "/zaher-alashker-cv.pdf" // Link to CV in the public folder
};

export const ABOUT_ME_DATA = {
  introduction: "Hello! I'm Zaher, a dedicated Full Stack Developer with a strong background in building robust and scalable web applications. My expertise spans across the entire development lifecycle, from conceptualization and design to deployment and maintenance.",
  passion: "I thrive on solving complex problems and transforming ideas into reality. I'm always eager to explore new technologies and methodologies to enhance my skill set and deliver high-quality products. My goal is to contribute to impactful projects that make a difference.",
  philosophy: "I believe in the power of collaboration, continuous improvement, and user-centric design. Writing clean, maintainable, and efficient code is not just a practice but a principle I adhere to."
};

export const SKILLS_DATA: Skill[] = [
  // Databases Management & Visualization
  { name: 'MS Excel (incl. Power Query)', category: 'Databases Management & Visualization' },
  { name: 'MS Access', category: 'Databases Management & Visualization' },
  { name: 'MS Visio', category: 'Databases Management & Visualization' },
  { name: 'MS Word', category: 'Databases Management & Visualization' },
  { name: 'MS PowerPoint', category: 'Databases Management & Visualization' },
  { name: 'Microsoft Power BI', category: 'Databases Management & Visualization' },
  { name: 'MS SQL Server', category: 'Databases Management & Visualization' },

  // Data Collection
  { name: 'Kobo Collect Toolbox', category: 'Data Collection' },
  { name: 'ODK (OpenDataKit)', category: 'Data Collection' },

  // Mapping
  { name: 'ArcGIS', category: 'Mapping' },
  { name: 'Microsoft Power BI (Mapping)', category: 'Mapping' },


  // Website Design
  { name: 'WordPress', category: 'Website Design' },

  // Graphic Design
  { name: 'Adobe Photoshop', category: 'Graphic Design' },
  { name: 'Adobe Illustrator', category: 'Graphic Design' },
  { name: 'Corel Draw', category: 'Graphic Design' },

  // Programming
  { name: 'Python (Basics)', category: 'Programming' },
  { name: 'Java (Basics)', category: 'Programming' },

  // IT Skills
  { name: 'General IT & Networking Management', category: 'IT Skills' },
  { name: 'Software & Hardware Maintenance', category: 'IT Skills' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2021 - Present',
    description: [
      'Led the development of key features for a flagship SaaS product, improving user engagement by 20%.',
      'Mentored junior developers and conducted code reviews to ensure high-quality standards.',
      'Collaborated with cross-functional teams to define project requirements and deliverables.',
      'Implemented and maintained CI/CD pipelines, reducing deployment time by 30%.'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    role: 'Software Engineer',
    company: 'Innovatech Ltd.',
    duration: 'Jun 2018 - Dec 2020',
    description: [
      'Developed and maintained web applications using Angular and Spring Boot.',
      'Participated in the full software development lifecycle, from design to deployment.',
      'Contributed to the migration of legacy systems to modern microservices architecture.',
      'Wrote unit and integration tests to ensure code reliability and quality.'
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Jenkins']
  },
  {
    role: 'Junior Developer',
    company: 'Web Wizards Co.',
    duration: 'Jul 2017 - May 2018',
    description: [
      'Assisted senior developers in building and testing web components.',
      'Gained experience in frontend technologies like HTML, CSS, JavaScript, and Vue.js.',
      'Contributed to bug fixing and improving application performance.'
    ],
    technologies: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'Firebase']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration. Built with a microservices architecture.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A collaborative task management tool designed to help teams organize, track, and manage their work efficiently. Features include boards, lists, cards, and real-time updates.',
    technologies: ['Angular', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveLink: '#',
    repoLink: '#'
  },
  {
    id: 'project-3',
    title: 'Personal Portfolio Website (Previous Version)',
    description: 'My previous portfolio website built to showcase my skills and projects. Focused on a clean UI and responsive design.',
    technologies: ['Vue.js', 'Nuxt.js', 'Netlify'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveLink: '#',
  },
   {
    id: 'project-4',
    title: 'AI Powered Content Summarizer',
    description: 'A web application that uses AI to summarize long articles or text inputs, providing quick insights. Integrated with a third-party NLP API.',
    technologies: ['Python', 'Flask', 'React', 'NLP API'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    repoLink: '#'
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: 'zaher.alashker@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Global / Remote',
  linkedin: 'https://www.linkedin.com/in/zaheralashker', // Example, replace with actual
  github: 'https://github.com/zaheralashker' // Example, replace with actual
};