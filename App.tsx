
import React from 'react';
import { PersonalInfo, Experience, EducationItem, SkillCategory, TrainingItem } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import TrainingSection from './components/TrainingSection';
import QualificationsSection from './components/QualificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton'; // Import the new component

const personalInfoData: PersonalInfo = {
  name: "Zaher Alashker",
  title: "Information Management Professional",
  location: "Damascus/Gaziantep/Remote", // Updated location
  email: "zaher.alashker@gmail.com", // Updated to lowercase
  skype: "ZAHER ALASHKER", // Data remains, but not used in ContactSection or Hero
  profileImageUrl: "/assets/profile.jpg", 
  dateOfBirth: "1/1/1984 / Damascus",
  gender: "Male",
  maritalStatus: "Married",
  nationality: "Syrian / Turkish",
  languages: [
    { lang: "Arabic", proficiency: "Native" },
    { lang: "English", proficiency: "Advanced" },
    { lang: "Turkish", proficiency: "Fair" },
  ],
  linkedinUrl: "https://www.linkedin.com/in/zaher-al-ashker-603808134/",
};

const careerObjectiveData: string = "To obtain a position that best fits my qualifications and further develop my talent and skills for continuous career improvement.";

const workExperienceData: Experience[] = [
  {
    title: "Senior Information Management (IM) Associate",
    company: "IOM",
    location: "Gaziantep",
    dates: "2024-2025",
    responsibilities: [],
  },
  {
    title: "Senior Operations Assistant (Beneficiary Data Management)",
    company: "IOM",
    location: "Gaziantep",
    dates: "2020-2024",
    responsibilities: [],
  },
  {
    title: "Information Management Assistant - Livelihood",
    company: "DRC",
    location: "Kilis",
    dates: "2018",
    responsibilities: [
      "Set up and maintain the database and information management systems at the base level for the LVH program.",
      "Ensure the daily management of the DRC LVH program through data checks, scoring for referrals to available trainings and activities, data entry of beneficiaries' attendance, and data extraction.",
      "Ensure data consistency and integrity across the DRC LVH program at the base level.",
      "Obtain, compile, and analyze data on the program output indicators as per output trackers, and disseminate in appropriate formats for improving the programmatic decision-making and planning process.",
      "Produce statistical analysis and reports on project data on request.",
      "Ensure there is provision for data security (including strict data handling and confidentiality protocols), weekly backup, and recovery control."
    ],
  },
  {
    title: "Database & IT Officer",
    company: "Abigem Business Development Center",
    location: "Antakya",
    dates: "2017",
    responsibilities: [],
  },
  {
    title: "English and Computer Facilitator",
    company: "DRC (Community Center)",
    location: "Antakya",
    dates: "2016",
    responsibilities: [],
  },
];

const educationData: EducationItem[] = [
  { degree: "Bachelor's Degree in Computer Science", institution: "University of the People", year: 2025 },
  { degree: "Open Learning - English/Translation Department", institution: "Damascus University, Syria", year: 2012 },
  { degree: "Teachers Training Institute - English Section", institution: "Ministry of Education, Damascus, Syria TTI", year: 2007 },
];

const skillsData: SkillCategory[] = [
  {
    categoryName: "Database Management and Visualization",
    skills: [
      { name: "MS Office Programs", details: "Excel, Excel Power Query, Access, Visio, Word, Power BI, PowerPoint, MS SQL Server" },
    ],
  },
  {
    categoryName: "Data Collection",
    skills: [{ name: "Kobo Collect Toolbox" }, { name: "ODK" }],
  },
  {
    categoryName: "Mapping",
    skills: [{ name: "ArcGIS" }, { name: "MS Power BI" }],
  },
  {
    categoryName: "Website Design",
    skills: [{ name: "WordPress" }],
  },
  {
    categoryName: "Graphic Design",
    skills: [{ name: "Adobe Photoshop" }, { name: "Adobe Illustrator" }, { name: "CorelDRAW" }],
  },
  {
    categoryName: "Programming",
    skills: [{ name: "Python Basics" }, { name: "Java Basics" }, { name: "HTML Basics" }, { name: "PHP Basics" }],
  },
  {
    categoryName: "IT Skills",
    skills: [{ name: "General IT and networking management" }, { name: "Software and hardware maintenance" }],
  },
];

const trainingData: TrainingItem[] = [
  { name: "Various online courses", issuer: "Self-Learning", details: "Excel, Power BI, Kobo, SQL and SQL server, IT (Countless hours)" },
  { name: "BSAFE", issuer: "IOM", details: "Preparing and Responding to Active Shooter Incidents, I know gender, IOM ethics training, Data Protection, Prevention of Sexual Exploitation and Abuse." },
  { name: "(CALP) Core Cash and Voucher Assistance Skills for Program Staff", issuer: "IOM" },
];

const qualificationsData: string[] = [
  "Demonstrated interest in volunteering and human rights, commitment to confidentiality and neutrality.",
  "Good understanding of humanitarian principles.",
  "Field and office environment work experience.",
  "Excellent communication and interpersonal skills.",
  "Proficient in written and oral communication in Arabic and English.",
  "Strong ability to deal with software and hardware maintenance, strong ability to learn new programs very quickly.",
  "Strong ability to meet deadlines and respect for time frames and work plans.",
  "Work effectively with diverse groups of people and with minimum supervision.",
  "Highly trainable and a fast learner. Adapt well to changes and pressures in the workplace.",
  "Friendly, Diligent, and Trustworthy. A team player and a proven leader.",
];

const App: React.FC = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Training", href: "#training" },
    { name: "Qualifications", href: "#qualifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Navbar name={personalInfoData.name.split(' ')[0]} links={navLinks} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24"> {/* Added padding-top for fixed navbar */}
        <div id="home">
          <Hero personalInfo={personalInfoData} />
        </div>
        <div id="about">
          <About careerObjective={careerObjectiveData} personalInfo={personalInfoData} />
        </div>
        <div id="experience">
          <ExperienceSection experiences={workExperienceData} />
        </div>
        <div id="skills">
          <SkillsSection skillCategories={skillsData} />
        </div>
        <div id="education">
          <EducationSection educationHistory={educationData} />
        </div>
        <div id="training">
          <TrainingSection trainingCourses={trainingData} />
        </div>
        <div id="qualifications">
          <QualificationsSection qualificationsList={qualificationsData} />
        </div>
        <div id="contact">
          <ContactSection email={personalInfoData.email} linkedinUrl={personalInfoData.linkedinUrl} />
        </div>
      </main>
      <Footer />
      <BackToTopButton /> {/* Added the BackToTopButton here */}
    </>
  );
};

export default App;
